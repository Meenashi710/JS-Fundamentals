/* 
Exercise: Student Grade Evaluation
You are tasked with evaluating the grades of students based on their scores. Each student has the following properties:

Name
Score (out of 100)
The students are:

Student 1: Name - "Alice", Score - 85
Student 2: Name - "Bob", Score - 92
Student 3: Name - "Charlie", Score - 78
Student 4: Name - "David", Score - 88
Your tasks are:
Store these students in an array of objects.
Determine which student has a score greater than or equal to 90 and print their name.
Check if each student’s score is above or below the average score of the group and print whether they performed above or below average.
Print a message indicating if any student scored exactly 80.
Requirements:
Use objects to represent the students.
Store the objects in an array.
Utilize relational operators (>, <, >=, <=) and equality operators (===, !==) to perform comparisons and evaluations.
Print results clearly.
*/

var students=[
    {name: "Alice",score:85},
    {name: "Bob",score:92},
    {name:"Charlie",score:78},
    {name:"David", score:88}
]
//Student with score greater than or equal to 90
students.forEach(student=>{
    if(student.score>=90){
        console.log(`Student with highest score is ${student.name}`)
    }
})

//To check students who performed above or below average
let totalScore=0
students.forEach(student=>{
    totalScore+=student.score
})
let avgScore=totalScore/students.length
students.forEach(student=>{
    if(student.score>avgScore){
        console.log(`${student.name} performed above average`)
    } else if(student.score<avgScore) {
        console.log(`${student.name} performed below average`)
    } else {
        console.log(`${student.name} performed equally the average`)
    }
})

//Print if any student scored exactly 80
let scored80=false
let score=80
students.forEach(student=>{
    if(student.score===score){
        console.log(`${student.name} scored exactly 80`)
        scored80=true
    } 
})
if(!scored80){
    console.log(`None of the students scored exactly 80`)
}




