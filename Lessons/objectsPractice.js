//Define and object

var Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,

    startEngine: function(){
        console.log("The "+ this.make+" "+this.model+" engine has started")
    },

    getCarInfo: function(){
        return this.year+" "+this.make+" "+this.model
    }
};

//Accessing property
console.log(Car.make);
console.log(Car.model)
Car.startEngine();
//calling fn with square bracket
var carInfo = Car['getCarInfo']();
console.log(carInfo);
