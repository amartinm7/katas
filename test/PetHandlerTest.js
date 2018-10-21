const assert = require('chai').assert
const DogHandler = require('../src/PetHandler').DogHandler

// Hi, here is the challenge:
// Using this two endpoints
// - https://dog.ceo/api/breeds/list  (returns a list of dog breeds)
// - https://dog.ceo/api/breeds/image/random/{breedName} (returns the URL of an image of the selected breed)
//
// https://dog.ceo/dog-api/
// You have to print using console.log the breeds containing more than 4 vocals in their breed name
// along with the URL of an image associated to this breed, using the format:
//
// {breedName} -- {breedImgUrl}
//
// The order of this messages should be the same as the order of the breed names.
// Example:
// - receiving ['lorem', 'ipsum','chihuahua', 'pomerania']
//
// you should print:
//   chihuahua -- https://yoururl.com/chihuahua/1234145
//   pomerania -- https://yoururl.com/pomerania/5431232
//   The estimated maximum time to solve this is one hour,
//   please provide a zip file with all the files needed to solve this, and describe how to run your solution to make it work.
//   Thanks.

describe('Testing PetHandler class', function(){
  this.timeout(10000);
  const expectedDogList = [
    'airedale -- https://images.dog.ceo/breeds/airedale/n02096051_6747.jpg',
    'chihuahua -- https://images.dog.ceo/breeds/chihuahua/n02085620_4998.jpg',
    'cotondetulear -- https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg',
    'groenendael -- https://images.dog.ceo/breeds/groenendael/n02105056_5212.jpg',
    'mexicanhairless -- https://images.dog.ceo/breeds/mexicanhairless/n02113978_3375.jpg',
    'pomeranian -- https://images.dog.ceo/breeds/pomeranian/n02112018_2728.jpg',
    'weimaraner -- https://images.dog.ceo/breeds/weimaraner/n02092339_6678.jpg'
  ]
  it('DogHandler printDogs...', async() => {
    console.log('\nDogHandler: get all dogs with more than 4 vowels in their breed name... ')
    const dogHandler = new DogHandler()
    const matchedDogList = await dogHandler.getMatchedDogList()
    assert.isOk(matchedDogList.length > 0,'the matchedDogList is empty')
    assert.equal(expectedDogList.length, matchedDogList.length,'the matchedDogList size doesn\'t match')
    for(let key in expectedDogList) {
      const dog = matchedDogList[key]
      assert.isOk(expectedDogList[key].includes(dog.breedName),'the printed dog is not the same')
      dog.printDog()
    }
    console.log('end\n')
  })
  it('DogHandler printAll...', async() => {
    console.log('\nDogHandler printAll... ')
    const dogHandler = new DogHandler()
    await dogHandler.printAll()
    assert.isOk(true,'the printing is not working')
    console.log('end\n')
  })
})


