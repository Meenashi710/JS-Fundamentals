//Objects and Arrays
//object is an entity that can hold multiple values at the same time
//1.objects

// var Customer = {
//     //object is defined in a key value pair
//     firstName:"John",
//     lastName:"Smith"
// }
// console.log(Customer) //it prints the entire object  //approach no.1
//if I want to see only the firstname John,then
// console.log(Customer.firstName) //approach no.1
//if I want to see only the lastname Smith,then
// console.log(Customer.lastName) //approach no.1

//approach n0.2
// console.log(Customer['lastName'])
// console.log(Customer['firstName'])

// //to change any value described in the object
// // Dot notation
// Customer.firstName='Mike'
// // //Bracket nottaion
// Customer['lastName']='Simon'
// console.log(`${Customer.firstName} ${Customer.lastName}`)  
// console.log(`${Customer.firstName} ${Customer['lastName']}`)
// console.log(Customer.firstName+" "+Customer.lastName)
// var fullName = Customer['firstName']+ " "+Customer['lastName']
// console.log(fullName)

//2.Arrays

var Car = ["Volvo", "Toyota", "BMW"]
//now I am changing the value of 3rd car
Car[2]="Mercedes"
console.log(Car[2])

//We can define array inside the object also

var Client = {
    firstName1:"Meenashi",
    lasttName1:"Arunachalam",
    Cars: ["BMW", "Maruti", "KIA"]
    
}

console.log(Client.Cars[2])