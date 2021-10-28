# Callbacks

* [Video recording](https://us02web.zoom.us/rec/share/wFGiPJJk2WHWvgHaistiB-oIsWzdnfSMOb5JRZSi-phxQOS7cVUXAXwYvedLwndy.vRPslaZ54HzVgxQL?startTime=1635440784000)

## Outline
1. Functions as values
2. Anonymous functions
3. Function calling vs passing
4. Callback functions (& higher-order functions)
5. Arrow Functions
6. Nested scope and "scope chain"

## Functions as values
* Like everything else in JavaScript, functions are objects
* Therefore functions can be stored in variables like any other value
* Those variables can then be passed around and used like any other value

## Anonymous functions
Function expressions, `function [name](arg1, arg2, ...) { /* do something */ }`, can be named or anonymous.

```javascript
    // named function
    function sayHello(person) {
        console.log("Hello,", person)
    }
    // anonymous function stored in a variable
    const sayHello = function (person) {
        console.log("Hello,", person)
    }
```

## Function calling vs passing
* Functions are distinct from other objects in JavaScript because they are `callable`
* This means functions can be `called`, usually by using bracket notation `exampleFunc(someArg)`
* By excluding the brackets we can instead pass the function as a value like we would with any other variable

```javascript
    // call the function using brackets and store as value
    const myVariable = myFunction()
    // pass the function as a value by omitting the brackets
    someOtherFunc(myFunction)
```

## Callback functions (& higher-order functions)
* A function that is passed to another function as an argument is called a **Callback**
* The function can then call the callback like it would any other function
* A function that accepts another function as an argument is called a **Higher-order function**

> ### Higher-order functions
> In mathematics and computer science, a higher-order function is a function that does at least one of the following:
> * takes one or more functions as arguments
> * returns a function as its result

```javascript
    // define a simple function
    const helloWorld = function () {
        console.log("Hello world!")
    }
    // define a higher-order function that accepts a callback
    const doTenTimes = function (callback) {
        // call the callback 10 times
        for (let i = 0; i < 10; i++) {
            callback()
        }
    }
    // pass our simple function as the callback to our higher-order function
    // this will print "Hello world!" ten times to our console
    doTenTimes(helloWorld)
```

## Useful links
* Callbacks: [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function), [wikipedia](https://en.wikipedia.org/wiki/Callback_(computer_programming))
* Higher-order functions: [Eloquent JavaScript](https://eloquentjavascript.net/05_higher_order.html)