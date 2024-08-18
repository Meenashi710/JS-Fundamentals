// logical operators

//1.Logical AND
console.log(false && false) //all values have to be true for the expression to be true

//2. Logical OR
console.log(true || true) // any of the value should be truw for the expression to be true

//example

var isAgeMoreThanEighteen = true
var isUSCitizen = true
var eligibility = isAgeMoreThanEighteen && isUSCitizen
console.log("The person is elgible for DL:" +eligibility)
console.log(`The Customer is eligible for DL: ${eligibility}`)

//3. Logical NOT
console.log(!true) //opposite of the value will be the result
console.log(6!==10)
