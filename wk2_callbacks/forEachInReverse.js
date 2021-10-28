// 1) Define a function that accepts an array of values and a callback
// 2) calls the callback once per value in the array
// 3) starting with the last value, then the second last, etc...
// 4) and passes the current value and index to the callback

const exampleArray = [1, 2, 3, 4, 5]
const exampleArray2 = ["a", "b", "c"]

const forEachInReverse = (values, callback) => {
  for (let i = values.length - 1; i >= 0; i--) {
    const value = values[i]
    callback(value, i)
  }
}

forEachInReverse(exampleArray2, (item, index) => {
  console.log(`Item at index of ${index} is ${item}`)
})
