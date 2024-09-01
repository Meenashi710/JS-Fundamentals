/*
You have an array of objects representing different items
 in a shopping cart. Each item has properties like name, quantity, and pricePerUnit.
 var shoppingCart = [
    { name: "T-shirt", quantity: 3, pricePerUnit: 15 },
    { name: "Jeans", quantity: 2, pricePerUnit: 40 },
    { name: "Cap", quantity: 5, pricePerUnit: 10 }
];
Task
Calculate and print the total cost for each item. The total cost for each item is calculated as quantity * pricePerUnit.
Calculate and print the overall total cost of all items in the cart.
 */ 
var shoppingCart = [
    { name: "T-shirt", quantity: 3, pricePerUnit: 15 },
    { name: "Jeans", quantity: 2, pricePerUnit: 40 },
    { name: "Cap", quantity: 5, pricePerUnit: 10 }
];
var totalCost=0;
for(var i=0; i<shoppingCart.length;i++)
{
    var costPerItem=shoppingCart[i].quantity*shoppingCart[i].pricePerUnit
    console.log(`Cost for ${shoppingCart[i].name} is ${costPerItem}`)
    totalCost+=costPerItem
}

console.log(`Overall cost of all items in the cart is ${totalCost}`)
