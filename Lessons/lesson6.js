//Conditional Statement

/*if (condition){
    //execute some code here
} else{
    //execute some code here
}*/

//if hour between 6 and 12 print "Good Morning"
//if hour between 12 and 18 print "Good Afternoon"
//Otherwise Print "Good Evening"

var hour = 13
if(hour>=6 && hour<12){
    console.log("Good Morning")
} else if(hour>=12 && hour<18){
    console.log("Good Afternoon")
} else {
    console.log("Good Evening")
}