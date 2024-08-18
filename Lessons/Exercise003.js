/*Exercise 3: Iterating Over Object Properties
You have the following object representing a student's grades:

javascript
Copy code
var studentGrades = {
    math: 85,
    science: 92,
    english: 88,
    history: 76
};
Write code to:

Use a for...in loop to iterate over the studentGrades object.
Print each subject and its corresponding grade in the format: Subject: Grade.
Calculate and print the average grade of the student.*/

var studentGrades = {
    math: 85,
    science: 92,
    english: 88,
    history: 76
};

for(var key in studentGrades){
    console.log(key+": "+studentGrades[key])
}

//calculating the average grade

var totalGrades=0;
var numberOfSubjects=0;

for(var key in studentGrades){
    totalGrades+=studentGrades[key]
    numberOfSubjects++;
}
console.log("Total Marks :"+ totalGrades);
var averageGrades=totalGrades/numberOfSubjects;
console.log("average Grade:"+ averageGrades);