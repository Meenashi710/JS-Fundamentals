//Loops
for(let i=0; i<5; i++){
    console.log("Hello World" +i)
}

var cars= ["Volvo","Toyota","Tesla"] //to process through the array and to print all items
//we use for of loop
for(let car of cars){
    console.log(car)
} //here car is the iterator (just like iterator i in the above example)

var cars1= ["Volvo","Toyota","Tesla"] //if we want to interrupt the loop during execution and we are looking for a value say toyota
for(let c of cars1){
    console.log(c)
    if(c == "Toyota"){
        break
    }
}
//ES6 Syntax for each loop
var cars2= ["Volvo","Toyota","Tesla"]
cars2.forEach(a => {
    console.log(a)
})

