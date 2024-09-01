/* Exercise 5: Nested Objects and Array Manipulation
You have an object representing a user profile, which includes their name, email, and an array of their recent orders. Each order is an object with item, quantity, and price properties.

var userProfile = {
    name: "Alice",
    email: "alice@example.com",
    orders: [
        { item: "Laptop", quantity: 1, price: 999 },
        { item: "Mouse", quantity: 2, price: 25 },
        { item: "Keyboard", quantity: 1, price: 50 }
    ]
};
Write code to:

Calculate the total amount spent on all orders.
Print the total amount spent and each order’s details.*/

var userProfile = {
    name: "Alice",
    email: "alice@example.com",
    orders: [
        { item: "Laptop", quantity: 1, price: 999 },
        { item: "Mouse", quantity: 2, price: 25 },
        { item: "Keyboard", quantity: 1, price: 50 }
    ]
};

var totalCost=0;
for(var i=0;i<userProfile.orders.length;i++){
    var order=userProfile.orders[i];
    //console.log(order);
    var orderTotal=order.quantity*order.price;
    totalCost+=orderTotal;
    console.log("itemName: "+order.item+" , Quantity: "+order.quantity+" , Price: "+order.price+" , Total Cost: "+totalCost);
    //console.log(`itemName: ${order.item}, Quantity: ${order.quantity}, Price: ${order.price}, Total Cost: ${totalCost}`)
}
console.log("Total Amount Spent: "+totalCost);