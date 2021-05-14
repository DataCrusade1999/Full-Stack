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


/*Operators in JS */

const __ = 4+7;
console.log(__);

const ___ = 4*7;
console.log(___);

console.log(4==7);

/* similarly we can have other operators too */

console.log("Ashutosh " + "Pandey"); /*String concatnation */

console.log('10' + 5); /*converts the number into a string */

console.log('10' * 5);  /*converts the string into a number */

console.log('Ashutosh' * 5); /*can't multiply string and a number */

var val1 = 10;
var val2 = 10;

val1+=val2;/*shorthand operator */

console.log(val1);

console.log(++val1); /*pre increment operator */

/*conditional statements */

var value = 30;

if (value>=40 || value<=100) {
    console.log("value is greater than or equal to 40 and the value is " + value);
    /*beacause this condition is true JS doesn't execute both block below */
    
} else if(value<=40 && value>=0) {
    console.log("value is less than or equal to 40 and the value is " + value)
} else {
    console.log("Conditions were not met");
}

number = 11;

switch (number) {
    case 0:
        console.log("Number is zero");
        break;

    default:
        console.log("The number is " + number)
        break;
}

/* loops */

var array = [1,2,3,4,5,6,7,8,9];

for (let index = 0; index < array.length; index++) {

    console.log(array[index]);
    
}

var count = 0;
while (count < array.length) {
    console.log(array[count]);
    count++;
    
}

/*In do while loop the loop runs atleast one time */
var counter = 0;
do {
    console.log(array[counter]);
    counter++;   
} while (counter < array.length);


/*functions */


console.log("Function Begins")


function subtract(num1,num2) {

    return num1-num2;
    
}

console.log(subtract(56,98));


function add(num1,num2) {

    return num1+num2;
    
}

console.log(add(subtract(4,4),add(4,0)));