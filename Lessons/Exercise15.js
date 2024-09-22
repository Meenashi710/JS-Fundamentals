/* 
Exercise: Employee Bonus Eligibility
You are tasked with creating a simple system to evaluate which employees are eligible for a bonus. 
Each employee has the following properties:

Name
Years of Service
Performance Score (out of 100)
The employees are:

Employee 1: Name - "John", Years of Service - 5, Performance Score - 85
Employee 2: Name - "Jane", Years of Service - 3, Performance Score - 75
Employee 3: Name - "Sam", Years of Service - 6, Performance Score - 95
Your tasks are:
Store these employees in an array of objects.
Print the name of the employee with the longest service.
Check if each employee has a Performance Score greater than or equal to 80. Print whether they are eligible for a bonus or not.
An employee is eligible for a bonus if they have 5 or more years of service and a Performance Score of at least 80.
*/

let employees =[
    {name:"John", yearsOfService:5, performanceScore:85},
    {name:"Jane",yearsOfService:3, performanceScore:75},
    {name:"Sam", yearsOfService:6, performanceScore:95}
]

var longestServiceEmployee=employees[0]
if(employees[1].yearsOfService>longestServiceEmployee.yearsOfService){
    longestServiceEmployee=employees[1]
} else if(employees[2].yearsOfService>longestServiceEmployee.yearsOfService){
    longestServiceEmployee=employees[2]
}
console.log(`Employee with longest year of service is ${longestServiceEmployee.name} with a period of ${longestServiceEmployee.yearsOfService}`)

employees.forEach(employee=>{
    if(employee.yearsOfService>=5 && employee.performanceScore>=80){
        console.log(`${employee.name} is eligible for a bonus with a performance score of ${employee.performanceScore}`)
    } else {
        console.log(`${employee.name} is not eligible for a bonus as the performance score is less than 80`)
    }
})



