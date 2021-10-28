const test1 = "outer scope"
const test2 = "outer scope"
const test3 = "outer scope"
const test4 = "outer scope"

console.log("Outer scope logs:")
console.log("-----------")
console.log("Test 1 value is from —", test1)
console.log("Test 2 value is from —", test2)
console.log("Test 3 value is from —", test3)
console.log("Test 4 value is from —", test4)


function scope1() {
  const test2 = "inner scope #1"

  scope2()
  function scope2() {
    const test3 = "inner scope #2"

    scope3()
    function scope3() {
      const test4 = "inner scope #3"

      console.log("Inner scope logs:")
      console.log("-----------")
      console.log("Test 1 value is from —", test1)
      console.log("Test 2 value is from —", test2)
      console.log("Test 3 value is from —", test3)
      console.log("Test 4 value is from —", test4)
    }
  }
}

scope1()