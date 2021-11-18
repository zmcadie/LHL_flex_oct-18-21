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
    const provincePromises = files.map(filename => {
      return readFile(`./provinces/${filename}`, options)
        .then(fileContents => ({
          name: JSON.parse(fileContents).name,
          filepath: `./provinces/${filename}`
        }))
    })
    return Promise.all(provincePromises)
  }).then(res => {
    provinces = res
  }).then(() => {
    console.log("Options are:\n", provinces.map(p => p.name).join("\n"))
    return rlp.question("What province would you like to see? ")
  }).then(input => {
    const selection = provinces.find(prov => prov.name.toLowerCase() === input.toLowerCase())
    if (selection) {
      return readFile(selection.filepath, options)
    }
    throw "That's not a province you silly goose!"
  }).then(filecontents => {
    const json = JSON.parse(filecontents)
    console.log(`The code for ${json.name} is ${json.code}`)
  }).catch(error => {
    console.log(error)
  }).finally(() => {
    rlp.close()
  })