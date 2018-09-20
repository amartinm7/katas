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
    let counter = 0
    const myArray = new MyArray()
    myArray.push(...values)
    console.log(`${JSON.stringify(myArray)}`)
    console.log(`${JSON.stringify(myArray.length)}`)
    //when
    myArray.myEach((value) => {
      console.log(`... ${value}`)
      counter++
    })
    //then
    assert.equal(counter,6,'myEach function is not working well')
  })
  it('myFilter function ', function () {
    beforeEach(function(done){
      done()
    })
    afterEach(function(done){
      done()
    })
    //given
    let counter = 0
    const myArray = new MyArray()
    myArray.push(...values)
    console.log(`${JSON.stringify(myArray)}`)
    console.log(`${JSON.stringify(myArray.length)}`)
    //when
    myArray.myMap((value) => value * 3).myFilter((value) => value % 2 === 0).myEach((value) => {console.log(`... ${value}`); counter = counter + value})
    //then
    console.log(`${counter}`)
    assert.equal(counter,36,'myFilter function is not working well')
  })
  it('myReduce function: reduce [[1,3],[2,6],[3,9],[4,12],[5,15],[6,18]] to the concat array 1,1,1,3,2,6,3,9,4,12,5,15', function () {
    beforeEach(function(done){
      done()
    })
    afterEach(function(done){
      done()
    })
    //given
    let counter = 0
    const myArray = new MyArray()
    myArray.push(...values)
    console.log(`${JSON.stringify(myArray)}`)
    console.log(`${JSON.stringify(myArray.length)}`)
    console.log()
    //when
    myArray.myMap((value) => [value, value * 3])
      .myReduce((temp, value, i) => {
        console.log(`callback ${i}`)
        console.log(`the array ${temp}, the value ${value}`)
        const tempp = temp.concat(value)
        console.log(`the concat array ${temp}`)
        return tempp
      }, [1, 1])
      .myEach((value) => {console.log(`myEach... ${value}`); counter = counter + value})    //then
    assert.equal(counter,86,'myReduce function is not working well')
  })
  it('myEvery function', function () {
    beforeEach(function(done){
      done()
    })
    afterEach(function(done){
      done()
    })
    //given
    let counter = 0
    const myArray = new MyArray()
    myArray.push(...values)
    console.log(`${JSON.stringify(myArray)}`)
    console.log(`${JSON.stringify(myArray.length)}`)
    console.log()
    //when
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
    //then
    assert.isTrue(result, 'myEvery function is not working well')
  })
  it('mySome function', function () {
    beforeEach(function(done){
      done()
    })
    afterEach(function(done){
      done()
    })
    //given
    let counter = 0
    const myArray = new MyArray()
    myArray.push(...values)
    console.log(`${JSON.stringify(myArray)}`)
    console.log(`${JSON.stringify(myArray.length)}`)
    console.log()
    //when
    const result = myArray.myMap((value) => [value, value * 3])
      .myReduce((temp, value, i) => {
        console.log(`callback ${i}`)
        console.log(`the array ${temp}, the value ${value}`)
        const concatedTemp = temp.concat(value)
        console.log(`the concat array ${temp}`)
        return concatedTemp
      }, [1, 1])
      .mySome((value) => {
        return value / 2 === 1
      })
    //then
    assert.isTrue(result, 'mySome function is not working well')
  })
})
