const assert = require('chai').assert
const MyArray = require('../src/MyArray')

describe('testing myArray class',function(){
  const values = [1, 2, 3, 4, 5, 6]
  it('myEach function', function () {
    beforeEach(function(done){
      done()
    })
    afterEach(function(done){
      done()
    })
    //given
    const myArray = new MyArray()
    myArray.push(...values)
    console.log(`${JSON.stringify(myArray)}`)
    console.log(`${JSON.stringify(myArray.length)}`)
    //when
    let counter = 0
    myArray.myEach((value) => {
      console.log(`... ${value}`)
      counter++
    })
    //then
    assert(counter,6,'myEach function is not working well')
  })
  it('should ', function () {
    beforeEach(function(done){
      done()
    })
    afterEach(function(done){
      done()
    })
    //given
    const myArray = new MyArray()
    myArray.push(...values)
    console.log(`${JSON.stringify(myArray)}`)
    console.log(`${JSON.stringify(myArray.length)}`)
    //when
    let counter = 0
    myArray.myEach((value) => {
      console.log(`... ${value}`)
      counter++
    })
    //then
    assert(counter,6,'myEach function is not working well')
  })

})
/*
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
*/
