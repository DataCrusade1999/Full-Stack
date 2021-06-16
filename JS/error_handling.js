/**
Error Handling
JavaScript is a loosely-typed language. Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc.

JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors using try-catch-finally block.

try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}
try: wrap suspicious code that may throw an error in try block.The try statement allows us to define a block of code to be tested for errors while it is being executed.

catch: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information.
Catch block is used to log an error or display specific messages to the user.

finally: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task 
or reset variables that might have changed before error occurred in try block.
*/

try {
    let lastName = 'Pandey'
    let fullName = firstName + ' ' + lastName
} catch (err) {
  console.log('Name of the error', err.name)
  console.log('Error message', err.message)
} finally {
  console.log('In any case I will be executed')
}


/**
throw: the throw statement allows us to create a custom error. We can through a string, number, boolean or an object.
Use the throw statement to throw an exception. When you throw an exception, expression specifies the value of the exception. 
Each of the following throws an exception:
*/


/**
Error Types
ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.
*/
let firstName = 'Ashutosh'
let fullName = firstName + ' ' + lastName

console.log(fullName)

// TypeError: A type error has occurred

let num = 10
console.log(num.toLowerCase())


// SyntaxError: A syntax error has occurred

let square = 2 x 2
console.log(square)

console.log('Hello, world")

  