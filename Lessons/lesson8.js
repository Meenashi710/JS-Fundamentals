//Functions
//1.Declarative Function

function helloOne(){
    console.log('Hello One!')
}
helloOne()

//2.Anonymous Function - unction that doesn't has a name, which has to be assigned to a variable to revoke

var helloTwo = function(){
    console.log("Hello Two!")
}
helloTwo()
//difference between declarative function and anonymous function is that
//declative function can be called in the beginning of the file even if the function is defined a bit later
//but for anonymous function it has to be called after the function definition - throw an error it is not a function

//3. ES6 function syntax or arrow function

var helloThree = ()=> {
    console.log("hello Three!")
}
helloThree() // we can write function() or just (). both will work here

//4.Function with arguments
function printName(name){
    console.log(name)
}
printName('Meenashi')

function printName1(firstName , lastName){
    console.log(firstName + ' ' + lastName)
}
printName1("Meenashi" , "Arunachalam")

//5. Function with return

function multiplyByTwo(number){
    var result = number*2
    return result
}
var myResult=multiplyByTwo(10)
console.log(myResult)

//6.importing function ---define a function and call it from anywhere functionality
import { printAge } from "../Helpers/printHelpers.js"
printAge(5)

//7. import everything - second way
import * as helpers from '../Helpers/printHelpers.js'
helpers.printAge(6)