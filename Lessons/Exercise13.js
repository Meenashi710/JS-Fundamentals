/*
Here's another exercise that incorporates objects, arrays, and relational operators but focuses on a different scenario.

Exercise:
You are creating a simple employee database. Each employee has the following properties:

Name
Age
Salary
The employees in the database are:

Employee 1: Name - "Alice", Age - 28, Salary - 50000
Employee 2: Name - "Bob", Age - 32, Salary - 60000
Employee 3: Name - "Charlie", Age - 26, Salary - 55000
Your tasks are:
Store these employees in an array of objects.
Compare the ages of Employee 1 and Employee 2 and print who is older.
Determine whether Employee 3 has a higher salary than Employee 1 and print the result.
Requirements:
Use objects to represent the employees.
Store the objects in an array.
Use relational operators (>, <) to compare age and salary.
Print the results of the comparisons.

*/

var employees= [
    {Name:  "Alice", Age:28, Salary:50000},
    {Name: "Bob", Age:32, Salary:60000},
    {Name:"Charlie", Age:26, Salary:55000}

]

var employee1IsOlderThanEmployee2 = employees[0].Age>employees[1].Age;
var findHighestSalary = employees[2].Salary>employees[0].Salary;
console.log(`Is Employee1 older than Employee2  ${employee1IsOlderThanEmployee2}`)
console.log(`Does Employee3 earns more than Employee1 ${findHighestSalary}`)