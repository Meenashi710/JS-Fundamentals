/*Object and Array Manipulation
You have an object representing a shopping cart, where each item is represented by an object with name, quantity, and price properties:


var shoppingCart = {
    items: [
        { name: "Apple", quantity: 2, price: 3 },
        { name: "Banana", quantity: 5, price: 1 },
        { name: "Orange", quantity: 3, price: 2 }
    ]
};
Write code to:

Calculate the total cost of all the items in the shopping cart.
Print the total cost to the console.*/


var shoppingCart = {
    items: [
        { name: "Apple", quantity: 2, price: 3 },
        { name: "Banana", quantity: 5, price: 1 },
        { name: "Orange", quantity: 3, price: 2 }
    ]
};

var totalCost=0;
for(var i=0;i<shoppingCart.items.length;i++){
   var item=shoppingCart.items[i];
    console.log(item)
    totalCost+=item.quantity*item.price
}

console.log("Total Cost: "+ totalCost);

