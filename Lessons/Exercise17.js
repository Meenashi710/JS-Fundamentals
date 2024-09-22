/* 
Exercise: Product Price Comparison
You are tasked with comparing prices of products in a store. Each product has the following properties:

Name
Price (in USD)
The products are:

Product 1: Name - "Laptop", Price - 999.99
Product 2: Name - "Smartphone", Price - 499.99
Product 3: Name - "Tablet", Price - 299.99
Product 4: Name - "Headphones", Price - 89.99
Your tasks are:
Store these products in an array of objects.
Determine which product has the highest price and print its name and price.
Check if any product costs less than $300 and print their names.
Print a message indicating if there are any products that cost exactly $500.
Requirements:
Use objects to represent the products.
Store the objects in an array.
Utilize relational operators (>, <, >=, <=) and equality operators (===, !==) for comparisons.
Print results clearly.
*/

var products=[
    {Name: "Laptop", Price:999.99},
    {Name:"SmartPhone", Price:499.99},
    {Name: "Tablet",Price:299.99},
    {Name:"Headphones",Price:89.99}
]
//To find product with highest price and its name
let highestPrice=products[0]
if(products[1].Price>highestPrice.Price){
    highestPrice=products[1]
}else if(products[2].Price>highestPrice.Price){
    highestPrice=products[2]
}else if(products[3].Price>highestPrice.Price){
    highestPrice=products[3]
}
console.log(`${highestPrice.Name } is having the highest price with a value ${highestPrice.Price}`)

//To find product that costs less than $300 and print its name
let currentPrice=300
products.forEach(product=>{
    if(product.Price<currentPrice){
        console.log(`Product that cost less than ${currentPrice} is ${product.Name} which costs ${product.Price}`)
    } 
})

//To find a product that costs exaclty 500 and print its name
let marginalPrice=500
let isPrice500=false
products.forEach(product=>{
    if(product.Price===marginalPrice){
        console.log(`${product.Name} costs exactly 500`)
        isPrice500=true
    }
     
})

if(!isPrice500){
    console.log(`None of the product costs exactly 500`)
}