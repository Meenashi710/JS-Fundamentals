/*
You have a list of products in a store, and each product has a name, quantity in stock, and price per unit. 
You need to calculate the total stock value for the store and find the most expensive product.
var storeInventory = [
    { name: "Laptop", quantity: 4, pricePerUnit: 1200 },
    { name: "Phone", quantity: 10, pricePerUnit: 800 },
    { name: "Tablet", quantity: 6, pricePerUnit: 500 },
    { name: "Headphones", quantity: 15, pricePerUnit: 150 }
];
*/ 

var storeInventory = [
    { name: "Laptop", quantity: 4, pricePerUnit: 1200 },
    { name: "Phone", quantity: 10, pricePerUnit: 800 },
    { name: "Tablet", quantity: 6, pricePerUnit: 500 },
    { name: "Headphones", quantity: 15, pricePerUnit: 150 }
]
var totalStockValue=0
var mostExpensiveProduct=storeInventory[0]
for(var product of storeInventory){
    var productValue=product.quantity*product.pricePerUnit
    totalStockValue+=productValue
    if(product.pricePerUnit>mostExpensiveProduct.pricePerUnit){
        mostExpensiveProduct=product
    }
}

console.log(`Total Stock Value is ${totalStockValue}`)
console.log(`Most Expensive product is ${mostExpensiveProduct.name} priced at ${mostExpensiveProduct.pricePerUnit}`)
