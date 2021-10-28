const exampleArray = [1, 2, 3]

for (const item of exampleArray) {
  console.log(item)
}

// can be re-written as:
const logEach = function(items) {
  for (const item of items) {
    console.log(item)
  }
}

logEach(exampleArray)

// but if we want something more abstract (and single purpose):

// forEach.js
// 1) Define a function that accepts an array of values and a callback
// 2) calls the callback once per value in the array
// 3) and passes the current value and index to the callback

const forEach = function (items, callback) {
  for (let i = 0; i < items.length; i ++) {
    const value = items[i]
    callback(value, i)
  }
}

const logItem = function(item) {
  console.log(item)
}

const doubleItem = function(item) {
  console.log(item * 2)
}

const indexExample = function(item, index) {
  console.log(`The item at index: ${index} has the value of ${item}`)
}

const powerOfIndex = function(item, index) {
  console.log(item ** index)
}

forEach(exampleArray, logItem)
forEach(exampleArray, doubleItem)
forEach(exampleArray, powerOfIndex)
