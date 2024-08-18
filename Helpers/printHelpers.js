export function printAge(Age){
    console.log(Age)
} //we are going to import this function into lesson8.js
//to import a function we must export it first


//declaring a class and exporting it 
export class CustomerDetails{
    printName(name){
        console.log(name)
    }
   /**
    * This will display the last name
    * @param {String} lname 
    */
    printlastName(lname){
        console.log(lname)
    }
       

}

export const details = new CustomerDetails()
