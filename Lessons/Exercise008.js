/*You have an array of objects representing different products in a store. Each product has properties like name, price, and category.

Here's the initial setup:

var products = [
    { name: "Laptop", price: 1500, category: "Electronics" },
    { name: "Chair", price: 100, category: "Furniture" },
    { name: "Book", price: 20, category: "Stationery" }
];
Task
Access and print the name of the first product.
Access and print the price of the second product.
Access and print the category of the third product.*/

var products = [
    { name: "Laptop", price: 1500, category: "Electronics" },
    { name: "Chair", price: 100, category: "Furniture" },
    { name: "Book", price: 20, category: "Stationery" }
];

console.log(`Name of the first product: ${products[0].name}`)
console.log(`Price of the second product: ${products[1].price}`)
console.log(`Category of the third product: ${products[2].category}`)