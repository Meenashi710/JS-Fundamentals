/**
 You have an object representing a company that contains an array of departments. Each department includes an array of employees. 
 Each employee has properties like name, salary, and performanceRating. The goal is to perform some analysis based on this data.
 var company = {
    departments: [
        {
            name: "Engineering",
            employees: [
                { name: "John", salary: 80000, performanceRating: 4.5 },
                { name: "Alice", salary: 95000, performanceRating: 4.8 },
                { name: "Bob", salary: 70000, performanceRating: 3.9 }
            ]
        },
        {
            name: "Marketing",
            employees: [
                { name: "Eve", salary: 65000, performanceRating: 4.2 },
                { name: "Charlie", salary: 72000, performanceRating: 4.0 },
                { name: "Diana", salary: 68000, performanceRating: 4.1 }
            ]
        }
    ]
};
Tasks:
Print the name of each department and the names of employees in each department.
Calculate and print the average salary for each department.
Find and print the highest-performing employee (with the highest performance rating) in each department.
Calculate and print the total salary expenditure for the company.
 */

var company = {
    departments: [
        {
            name: "Engineering",
            employees: [
                { name: "John", salary: 80000, performanceRating: 4.5 },
                { name: "Alice", salary: 95000, performanceRating: 4.8 },
                { name: "Bob", salary: 70000, performanceRating: 3.9 }
            ]
        },
        {
            name: "Marketing",
            employees: [
                { name: "Eve", salary: 65000, performanceRating: 4.2 },
                { name: "Charlie", salary: 72000, performanceRating: 4.0 },
                { name: "Diana", salary: 68000, performanceRating: 4.1 }
            ]
        }
    ]
};

for(var dept of company.departments){
    console.log(`Name of Departments: ${dept.name}`)
    for(var emp of dept.employees){
        console.log(`-Employee ${emp.name}`)
    }
}

for(var dept of company.departments){
    var totSalary=0;
    for(var emp of dept.employees){
        totSalary+=emp.salary
    }
    var avgSalary=(totSalary/dept.employees.length).toFixed(2)
    console.log(`Average salary of ${dept.name} department is ${avgSalary} `)
}

for(var dept of company.departments){
    var avgPerRating=dept.employees[0];
    for(var emp of dept.employees){
        if(emp.performanceRating>avgPerRating.performanceRating){
            avgPerRating=emp;
        }
    }
    console.log(`Top performer in the ${dept.name} is ${avgPerRating.name} with the rating of ${avgPerRating.performanceRating}`)
}

var totalExpenditure=0;
for(var dept of company.departments){
    for(var emp of dept.employees){
        totalExpenditure+=emp.salary
    }
}
console.log(`Total expenditure for the company : ${totalExpenditure}`)


