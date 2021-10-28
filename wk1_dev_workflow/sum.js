// Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though.

// 1. Accept unlimited command line arguments
// 2. Go through each and add all arguments together
// 3. Print sum of all arguments
// 4. SKIP not whole numbers
// 5. Support negative numbers

// Accept unlimited command line arguments
const arguments = process.argv.slice(2)

// Go through each and add all arguments together
let sum = 0
for (let index = 0; index < arguments.length; index++) {
  const argument = arguments[index]
  const number = Number(argument)
  // SKIP not whole numbers
  if (Number.isInteger(number)) {
    sum += number
  }
}

// Print sum of all arguments
console.log(sum)