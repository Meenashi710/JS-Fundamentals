/* 
Exercise:
You are tasked with creating a simple inventory system for a bookstore using only objects, arrays, and relational operators. 
The bookstore has the following three books:

Book 1: Title - "The Great Gatsby", Author - "F. Scott Fitzgerald", Price - 300
Book 2: Title - "1984", Author - "George Orwell", Price - 250
Book 3: Title - "To Kill a Mockingbird", Author - "Harper Lee", Price - 400
Your task is to:

Store these books in an array of objects, where each object represents a book with properties for title, author, and price.
Find out whether Book 1 is more expensive than Book 2 using relational operators.
Compare the prices of Book 2 and Book 3 using relational operators and print whether Book 2 is cheaper than Book 3.
Requirements:
Use objects to represent the books.
Store the objects in an array.
Use relational operators (>, <) to compare the prices of the books.
Print the results of the comparisons.

*/
var books=[
    {title:"The Great Gatsby", Author : "F. Scott Fitzgerald", Price :300},
    {title: "1984", Author:"George Orwell", Price:250},
    {title:"To Kill a Mockingbird", Author:"Harper Lee", Price:400}
]

let isBook1GreaterThanBook2 = books[0].Price>books[1].Price
let isBook2CheaperThanBook3 = books[1].Price>books[2].Price
console.log("Is 'The Great Gatsby' book is more expensive than '1984'? " +isBook1GreaterThanBook2)
console.log(`Is '1984' cheaper than 'To kill a Mockingbird?' ${isBook2CheaperThanBook3}`)


