/////////////////////////////////
// Storing functions as values //
/////////////////////////////////

// named function created with function declaration (will be hoisted)
function namedFunction() {
  console.log("I'm a named function")
}

// anonymous function created with function expression (will NOT be hoisted)
const anonFunction = function() {
  console.log("I'm an anonymous function")
}

namedFunction()
anonFunction()



///////////////
// Callbacks //
///////////////

// define a couple simple functions
const helloWorld = function () {
  console.log("Hello world!")
}
const helloLab = function () {
  console.log("Hello Lighthouse Labs!")
}
// define a higher-order function that accepts a callback
const doTenTimes = function (callback) {
  // call the callback 10 times
  for (let i = 0; i < 10; i++) {
      callback()
  }
}
// pass our simple functions as callbacks to our higher-order function
// this will call our simple functions 10 times each
doTenTimes(helloWorld)
doTenTimes(helloLab)



////////////////////////////////////
// Anonymous function as callback //
////////////////////////////////////

// anonymous function declared directly in higher-order function call
doTenTimes(function() {
  console.log("inline anonymous declaration")
})



/////////////////////
// Arrow functions //
/////////////////////

// Arrow functions are always anonymous functions
const arrowFunctionExample = () => {
  console.log("I'm an arrow function")
}

doTenTimes(() => console.log("I'm an arrow function"))

// prints the return value of a callback for each item in the array
const logEach = (array, cb) => {
  array.forEach(item => console.log(cb(item)))
}

const exampleArray = [1, 2, 3]

// Arrow functions written on one line without {} will implicitly return the result of their expression
// this means you don't need to include a return statement
logEach(exampleArray, item => item * 2)
// this is the same as the above function
logEach(exampleArray, item => {
  return item * 2
})
