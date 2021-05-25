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

/*
Function with default parameter.
*/
function greetings(name = 'XYZ') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Ashutosh Pandey'))

/* 
This function takes array as a parameter and sum up the numbers in the array(function with multiple arguments)

*/
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));


// Higher Order Function

/* 
Callback
A callback is a function which can be passed as parameter to other function. See the example below.
*/

const name = (firstName,lastName) => {
    return firstName + lastName;
}

const fullName = (name,firstName,lastName) => {
    return name(firstName,lastName);
}

console.log(fullName(name,'Ashutosh',' Pandey'));

/*
SetInterval
In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time.
The setInterval global method take a callback function and a duration as a parameter. 
The duration is in milliseconds and the callback will be always called in that interval of time.
*/

function sayHello() {
    console.log('Ashutosh Pandey');
}

setInterval(sayHello, 2000)

/*
setTimeout
In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. 
The setTimeout global method take a callback function and a duration as a parameter. 
The duration is in milliseconds and the callback wait for that amount of time.
*/
function sayHello() {
    console.log('Hello');
}
setTimeout(sayHello, 2000);
