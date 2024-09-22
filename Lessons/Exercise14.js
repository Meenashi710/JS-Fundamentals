/* 
Exercise: Student Grades Evaluation
You are tasked with creating a simple grades evaluation system for students. Each student has the following properties:

Name
Score
The students are:

Student 1: Name - "Alice", Score - 85
Student 2: Name - "Bob", Score - 92
Student 3: Name - "Charlie", Score - 78
Your tasks are:
Store these students in an array of objects.
Determine which student has the highest score and print their name and score.
Check if Student 1 has a score that is greater than or equal to 80 and print a message indicating whether they passed or failed.

*/

let students = [
    {name:"Alice", score:85},
    {name:"Bob",score:92},
    {name:"Charlie",score:78}
]

let highestScoreStudent= students[0]
let marginScore=80;
if(students[1].score>highestScoreStudent.score){
    highestScoreStudent=students[1]
} else if(students[2].score>highestScoreStudent.score) {
    highestScoreStudent=students[2]
}
console.log(`Highest Score is achieved by ${highestScoreStudent.name} with a score of ${highestScoreStudent.score}`)

if(students[0].score>=marginScore){
    console.log(`${students[0].name} is passed`)
}else 
{console.log(`${students[0].name} is failed`)
}