/**
Destructuring and Spread
Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.
*/
var myName = ['Ashutosh','Pandey','Ashu']
var [numOne, numTwo, numThree] = myName

console.log(numOne, numTwo, numThree)


var fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
var [frontEnd, backEnd] = fullStack

console.log(frontEnd)
console.log(backEnd)
  

// If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index

var myName = ['Ashutosh','Pandey','Ashu']
var [numOne, , numThree] = myName
console.log(numOne, numThree)

// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3,rest)
console.log(rest)


// Destructuring during iteration
var countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}

/*
Destructuring Object
When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.
*/
var myDetails = {
    firstName: 'Ashutosh',
    lastName: 'Pandey',
    age: 21
}
var { firstName, lastName, age } = myDetails

console.log(firstName, lastName, 'age',age)

// Renaming during structuring

var myDetails = {
    firstName: 'Ashutosh',
    lastName: 'Pandey',
    age: 21
}
var { firstName: fName ,lastName: lName, age } = myDetails

console.log(fName, lName, 'age',age)

// Unknown Key

var myDetails = {
    firstName: 'Ashutosh',
    lastName: 'Pandey',
    age: 21
}

// we can also give the key a default value like for example middleName:'Hawk'.
var { firstName: fName ,lastName: lName, age, middleName = undefined } = myDetails

console.log(fName, lName, 'age',age, middleName)


// Spread or Rest Operator
// When we destructure an array we use the spread operator(...) to get the rest elements as array. 
// In addition to that we use spread operator to spread arr elements to another array.
// Spread operator to get the rest of array elements

var countries = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries

console.log(gem)
console.log(fra)
console.log(nordicCountries)


// Spread operator to copy array
var names = ['Sanjay','Naveen','Praveen']
var firstName = [...names]
var names1 = ['Kulkarni','Verma','Sharma']
var lastName = [...names1]
var wholeNames = [...names, ...names1]

console.log(firstName)
console.log(lastName)
console.log(wholeNames)

var frontEnd = ['HTML', 'CSS', 'JS', 'React']
var backEnd = ['Node', 'Express', 'MongoDB']
var fullStack = [...frontEnd, ...backEnd]

console.log(fullStack)


// Spread operator to copy object
// We can copy an object using a spread operator
// We can also Modify or change the object while copying

const devloper = {
  name:'Ashutosh',
  title:'Programmer',
  country:'India',
  city:'Kanpur'
}

const copiedDev = {...devloper,city:'Kanpur City'}
console.log(copiedDev)


// Spread operator with arrow function
// Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. 
// If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.


const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args){
      sum += num // shorthand for sum = sum + num.
    }
    return sum
    
}

console.log(sumAllNums(1, 2, 3,4,5))