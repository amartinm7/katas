const axios = require('axios')

class PetHandler{
  constructor(){
    this.URL = {
      'breedList': 'https://dog.ceo/api/breeds/list/all',
      'breedImage': 'https://dog.ceo/api/breed/{breedName}/images/random'
    }
    this.pattern = /\w*[aeiuo]+\w*[aeiuo]+\w*[aeiuo]+\w*[aeiuo]+\w*[aeiuo]\w*/gi
  }

  async _httpGet (_url) {
    return await axios.get(_url)
  }

  async _getBreedList() {
    const response = await this._httpGet(this.URL.breedList)
    if (response.data.status === 'success') {
      return response.data.message
    }else{
      throw new Error(response.data);
    }
  }

  async _getBreedImage(_breedName) {
    const parsedURL = this.URL.breedImage.replace('{breedName}',_breedName)
    const response = await this._httpGet(parsedURL)
    if (response.data.status === 'success') {
      return response.data.message
    }else{
      throw new Error(response.data);
    }
  }

  async getMatchedDogList(){
    const breedList = await this._getBreedList()
    const matchedList = []
    for(let breedName in breedList){
      if (this.pattern.test(breedName)){
        const breedImageURL = await this._getBreedImage(breedName)
        matchedList.push(new Dog(breedName, breedImageURL))
      }
    }
    return matchedList
  }

  async printAll(){
    const matchedList = await this.getMatchedDogList()
    PetHandler.printList(matchedList)
  }

  static printList(_matchedList){
    for(let key in _matchedList){
      _matchedList[key].printDog()
    }
  }

}

class Dog {
  constructor(_breedName, _breedImageURL){
    this.breedName = _breedName
    this.breedImageURL = _breedImageURL
  }

  printDog(){
    console.log(`${this.breedName} -- ${this.breedImageURL}`)
  }
}

module.exports = {
  'Dog': Dog,
  'DogHandler': PetHandler
}
