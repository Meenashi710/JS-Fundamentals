/*
You are given an object representing a library. The library contains an array of books, and each book is an object 
with properties: title, author, year, and genres (where genres is an array of genre strings).
var library = {
    name: "City Library",
    location: "Downtown",
    books: [
        {
            title: "JavaScript: The Good Parts",
            author: "Douglas Crockford",
            year: 2008,
            genres: ["Programming", "JavaScript"]
        },
        {
            title: "Eloquent JavaScript",
            author: "Marijn Haverbeke",
            year: 2011,
            genres: ["Programming", "JavaScript"]
        },
        {
            title: "You Don't Know JS",
            author: "Kyle Simpson",
            year: 2015,
            genres: ["Programming", "JavaScript"]
        }
    ]
};
Task
Access and print the name of the library.
Access and print the title of the first book.
Access and print the author of the second book.
Access and print the genres of the third book.
 */ 

var library = {
    name: "City Library",
    location: "Downtown",
    books: [
        {
            title: "JavaScript: The Good Parts",
            author: "Douglas Crockford",
            year: 2008,
            genres: ["Programming", "JavaScript"]
        },
        {
            title: "Eloquent JavaScript",
            author: "Marijn Haverbeke",
            year: 2011,
            genres: ["Programming", "JavaScript"]
        },
        {
            title: "You Don't Know JS",
            author: "Kyle Simpson",
            year: 2015,
            genres: ["Programming", "JavaScript"]
        }
    ]
};

console.log(`Name of the library: ${library.name}`)
console.log(`Title of the first book: ${library.books[0].title}`)
console.log(`Author of the second book; ${library.books[1].author}`)
console.log("Genre of the third book: "+library.books[2].genres)