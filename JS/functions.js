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


/*
forEach
forEach: Iterate an array elements. We use forEach only with arrays. 
It takes a callback function with elements, index parameter and array itself. The index and the array optional.
*/

let sum = 0;
const numbers1 = [1,2,3,4,5];
numbers1.forEach(num => console.log(num))

console.log(sum)

/**
map
map: Iterate an array elements and modify the array elements. 
It takes a callback function with elements, index , array parameter and return a new array.
 */

const names = ['Ashutosh','Pandey']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

/**
* 
filter
Filter: Filter out items which full fill filtering conditions and return a new array.
 */

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

const countriesContainingLand = countries.filter((country) => country.includes('land'))
console.log(countriesContainingLand)


/**
reduce
reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value.
It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value.
If our array is an empty array, then Javascript will throw an error.
*/
const arrays = [1, 2, 3, 4, 5]
const total = arrays.reduce((acc, cur) => acc + cur, 0)

console.log(total)

const elements = [3,4,5,6,8,9]
const anotherTotal = elements.reduce(generic,0)

function generic(acc,cur) {
    return acc+cur;
}

console.log(anotherTotal)

/*
every
every: Check if all the elements are similar in one aspect. It returns boolean
*/
const arrayOfNumber = [3,4,5,'Ashutosh',8,9]
const areAllNumber = arrayOfNumber.every((arrayOfNumber) => typeof arrayOfNumber === 'integers')

console.log(areAllNumber)

/*
find
find: Return the first element which satisfies the condition
*/

console.log(arrayOfNumber.find((whisker) => whisker > 4))

/*
findIndex
findIndex: Return the position of the first element which satisfies the condition
*/

console.log(arrayOfNumber.findIndex((whisker) => whisker > 4))

/*
some
some: Check if some of the elements are similar in one aspect. It returns boolean
*/

console.log(arrayOfNumber.some((whisker) => typeof whisker === 'string'))