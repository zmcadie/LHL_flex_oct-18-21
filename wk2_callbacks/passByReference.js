const exampleObject = {
  a: "eh",
  b: "bee",
  c: "sea"
}

// modifies the original object
const modify = (obj) => {
  obj.newKey = "new value"
}
// does not change the original object
const replace = (obj) => {
  obj = {
    newKey: "new value"
  }
}

console.log(exampleObject)
replace(exampleObject)
console.log(exampleObject)