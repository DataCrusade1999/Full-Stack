/* 
Immediately Invokable Function Expression
You can create a function and immediately call it as shown below:
This can be extremely useful for scoping variables and containing code.
*/



(function() {

    console.log("Hello world");

})();


/*
Arrow function does not have the function scoped arguments object.
To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name.
Any thing we passed as argument in the function can be accessed as array in the arrow function. Let us see an example
*/

const areaOfCircle = (...radius) => {
    console.log(radius);
}

areaOfCircle(23,4,5,6,7,8,9);

/*
Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
Arrow function uses arrow instead of the keyword function to declare a function.
*/
const sumOfNaturalNumber = (start,end) => {
    let sum = 0;
    for (let index = start; index <= end; index++) {
        sum = sum + index;
    }

    return sum;
}

console.log(sumOfNaturalNumber(1,100));