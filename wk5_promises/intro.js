// const readline = require("readline")

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rl.question("What is your name? ", input => {
//   console.log(`Hello, ${input}`)

//   rl.question("What is your quest? ", input => {
//     console.log(`${input}? Wow, that sounds hard!`)
    
//     rl.question("What is your favourite colour? ", input => {
//       console.log(`Oh, I love ${input}!`)

//       rl.question("What is the airspeed velocity of a swallow? ", input => {
//         console.log("Hmmm, I'm not sure that's right...")

//         rl.close()
//       })
//     })
//   })
// })

const readlinePromise = require("./readline-promise")

const rlp = readlinePromise.createInterface({
  input: process.stdin,
  output: process.stdout
})

rlp.question("What is your name? ")
   .then(input => console.log(`Hello, ${input}`))
   .then(() => rlp.question("What is your quest? "))
   .then(input => console.log(`${input}? Wow, that sounds hard!`))
   .then(() => rlp.question("What is your favourite colour? "))
   .then(input => console.log(`Oh, I love ${input}!`))
   .then(() => rlp.question("What is the airspeed velocity of a swallow? "))
   .then(() => console.log("Hmmm, I'm not sure that's right..."))
   .catch(error => console.log("\n" + error))
   .finally(() => {
     console.log("Closing...")
     rlp.close()
   })
