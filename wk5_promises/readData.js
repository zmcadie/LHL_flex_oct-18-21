const { readFile, readdir } = require("fs/promises")
const readlinePromise = require("./readline-promise")

const rlp = readlinePromise.createInterface({
  input: process.stdin,
  output: process.stdout
})

const options = {
  encoding: "utf8"
}

let provinces

readdir("./provinces")
  .then(files => {
    provinces = files.map(filename => filename.split(".")[0])
    console.log("Options are:", provinces.join(", "))
    return rlp.question("What province would you like to see? ")
  })
  .then(input => {
    if (provinces.includes(input)) {
      return readFile(`./provinces/${input}.json`, options)
    }
    throw "That's not a promise you silly goose!"
  })
  .then(fileContents => {
    const fileData = JSON.parse(fileContents)
    console.log(fileData.name)
  })
  .catch(error => {
    console.log("\n" + error)
  })
  .finally(rlp.close)

// const { readFile, readdir } = require("fs")
// const readline = require("readline")

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// const options = {
//   encoding: "utf8"
// }

// readdir("./provinces", (error, files) => {
//   if (error) {
//     console.log(error)
//     return
//   }

//   const provinces = files.map(filename => filename.split(".")[0])
//   console.log("Options are:", provinces.join(", "))

//   rl.question("What province would you like to see? ", (input => {
//     if (!provinces.includes(input)) {
//       console.log("That's not a promise you silly goose!")
//       rl.close()
//       return
//     }
      
//     readFile(`./provinces/${input}.json`, options, (err, data) => {
//       if (error) {
//         console.log(error)
//         return
//       }
      
//       const jsonData = JSON.parse(data)
//       console.log(jsonData.name)
//       rl.close()
//     })
//   }))
// })