console.log("Ashutosh Pandey");
/**
 * Here const,var,let have their usual meaning
 */
var firstName = "Ashutosh";

let lastName = "Pandey";

console.log(firstName);

console.log(lastName);

const fullName = "Ashutosh Pandey";

console.log(fullName);

/**
 * Data Types
 */

var number = 34; /* integer  */
var personOne = 'Ashutosh'; /* string */ 
var person = true;/* bool */
var _ = null;/* null */

console.log(_);
console.log(person);

/*Below is how we define an abstract object */

var shirt = {
    color : "blue",
    size :  32,
    design : "canvas",
    shopAddress: {
        city: "Kanpur",
        state: "Uttar Pradesh",
        pincode: 3929399

    }

};

console.log(shirt);

console.log(shirt.color);

console.log(shirt.shopAddress.state);

/* Array */

var even = [2,4,6,8];
console.log(even);
console.log("The lenght of the array is " + even.length);
console.log("The number at index 2 is " + even[2]);
console.log(even[2] * even[3]);
even.push(10);
console.log(even);
even.pop();       /*Stack based */
console.log(even);
/*In JS array can store heterogenous data */


