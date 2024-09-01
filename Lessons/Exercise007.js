/* 
var bankAccount = {
    accountHolder: "John Doe",
    balance: 1000
};
Task
Access and print the account holder's name.
Access and print the current balance.
Update the balance by adding $500 to it, then print the new balance.
*/

var bankAccount = {
    accountHolder: "John Doe",
    balance: 1000
};

console.log(`Account Holder's Name: ${bankAccount.accountHolder}`)
console.log("Current Balance: "+bankAccount.balance)
var amountToAdd=500;
var newBalance=amountToAdd+bankAccount.balance;
console.log(`New Balance: ${newBalance}`)