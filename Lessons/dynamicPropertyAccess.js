//1.Accessing properties dynamically

var person={
    name: "Alice",
    age: 25,
    job: "Engineer"

}
var propertyName="job"
console.log(person[propertyName])

//2.Using computed property names

var i=1;
var key = "value"+i;

var data={
    value1:"first",
    value2:"second"
}
console.log(data[key])

//3.Iterating over properties {for...in loop}

var user={
    firstName:"John",
    lastNmae:"Doe",
    age:30
}

for(var key in user){
    console.log(key+": "+user[key])
}
