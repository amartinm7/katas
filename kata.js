/**
 * Kata to test the typical function methods in a collection
 */
class MyArray extends Array {
  constructor () {
    super()
    console.log('init myArray')
  }
  /**
   * given a collection iterate across the elements of the collection and
   * apply the callback function to every element. The function return void.
   * @param callback
   */
  myEach (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this)
    }
  }
  /**
   * given a collection returns a new transformed collection applying a callback function
   * to the elements of the original collection.
   * @param callback
   * @returns {MyArray}
   */
  myMap (callback) {
    const myArray = new MyArray()
    for (let i = 0; i < this.length; i++) {
      myArray.push(callback(this[i], i, this))
    }
    return myArray
  }
  /**
   * given a collection returns a new collection with the values which meet
   * a condition defined for a callback function
   * @param callback
   * @returns {MyArray}
   */
  myFilter (callback) {
    const myArray = new MyArray()
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        myArray.push(this[i])
      }
    }
    return myArray
  }
  /**
   * from a list of collections obtain a single collection as result of a callback function
   * @param callback
   * @param initialValue
   * @returns {array}
   */
  myReduce (callback, initialValue) {
    const acumm = new MyArray()
    acumm.push(initialValue)
    console.log(`>>>reduce ${JSON.stringify(this)}`)
    for (let i = 0; i < this.length; i++) {
      console.log(`>>>i ${JSON.stringify(this[i])}`)
      acumm.push(callback(acumm.pop(), this[i], i, this))
    }
    acumm.push(...acumm.pop())
    return acumm
  }
  /**
   * every - all elements meet a (callback) condition
   * @param callback
   * @param context
   * @returns {boolean}
   */
  myEvery (callback, context) {
    for (let i = 0; i < this.length; i++) {
      if (!callback.call(context, this[i], i, this)) {
        return false
      }
    }
    return true
  }
  /**
   * at least one element meet a (callback) condition
   * @param callback
   * @param context
   * @returns {boolean}
   */
  mySome (callback, context) {
    for (let i = 0; i < this.length; i++) {
      if (callback.call(context, this[i], i, this)) {
        return true
      }
    }
    return false
  }
}
// run the functions
const values = [1, 2, 3, 4, 5, 6]
const myArray = new MyArray()
myArray.push(...values)
console.log(`${JSON.stringify(myArray)}`)
console.log(`${JSON.stringify(myArray.length)}`)

myArray.myEach((value) => console.log(`... ${value}`))

myArray.myMap((value) => value * 3).myEach((value) => console.log(`... ${value}`))

myArray.myMap((value) => value * 3).myFilter((value) => value % 2 === 0).myEach((value) => console.log(`... ${value}`))

myArray.myMap((value) => [value, value * 3])
  .myReduce((temp, value, i) => {
    console.log(`callback ${i}`)
    console.log(`the array ${temp}, the value ${value}`)
    const tempp = temp.concat(value)
    console.log(`the concat array ${temp}`)
    return tempp
  }, [1, 1])
  .myEach((value) => console.log(`myEach... ${value}`))

const result = myArray.myMap((value) => [value, value * 3])
  .myReduce((temp, value, i) => {
    console.log(`callback ${i}`)
    console.log(`the array ${temp}, the value ${value}`)
    const concatedTemp = temp.concat(value)
    console.log(`the concat array ${temp}`)
    return concatedTemp
  }, [1, 1])
  .myEvery((value) => {
    return value / 1 === value
  })
console.log(result)

const result2 = myArray.myMap((value) => [value, value * 3])
  .myReduce((temp, value, i) => {
    console.log(`callback ${i}`)
    console.log(`the array ${temp}, the value ${value}`)
    const concatedTemp = temp.concat(value)
    console.log(`the concat array ${temp}`)
    return concatedTemp
  }, [1, 1])
  .mySome((value) => {
    return value / 1 === 1
  })
console.log(result2)
