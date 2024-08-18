/*Exercise 1: Object Property Access
Create an object representing a book with the following properties:

title: The title of the book (e.g., "JavaScript Essentials")
author: The author of the book (e.g., "Jane Doe")
year: The year the book was published (e.g., 2023)
Write code to:

Access and print the title and author of the book using dot notation.
Access and print the year of the book using bracket notation.*/

var book ={
    title: "JavaScript Essentials",
    author: "Jane Doe",
    year: 2023
}

console.log(book.title);
console.log(book.author);
console.log(book['year']);