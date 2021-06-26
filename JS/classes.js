/**
Classes
JavaScript is an object oriented programming language. Everything in JavScript is an object, with its properties and methods.
We create class to create an object. A Class is like an object constructor, or a "blueprint" for creating objects. 
We instantiate a class to create an object. The class defines attributes and the behavior of the object, while the object, 
on the other hand, represents the class.

Once we create a class we can create object from it whenever we want. Creating an object from a class is called class instantiation.

In the object section, we saw how to create an object literal. Object literal is a singleton. If we want to get a similar object , 
we have to write it. However, class allows to create many objects. This helps to reduce amount of code and repetition of code.
 */

// Defining a classes
// To define a class in JavaScript we need the keyword class , the name of a class in CamelCase and block code(two curly brackets). 
// Let us create a class name Person.

/**
Example:
class Person {
  // code goes here
}
*/

/**
Class Instantiation
Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the word new.

Let us create a person object from our Person class.
 */

class Person {
    // code goes here
}
var person = new Person()
console.log(person)


/**
Class Constructor
The constructor is a builtin function which allows as to create a blueprint for our object. The constructor function starts with a keyword constructor
followed by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use the this keyword to attach the constructor 
parameters with the class.

The following Person class constructor has firstName and lastName property. These properties are attached to the Person class using this keyword.
This refers to the class itself.
*/

class Employee {
    constructor(firstName = 'David ', lastName = 'Holmes') {
      // console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = firstName + lastName
  }
}

var employee0 = new Employee('Ashutosh ', 'Pandey')
var employee1 = new Employee('Asabeneh ', 'Yetayeh')
var employee2 = new Employee('Lidiya ', 'Tekle')
var employee3 = new Employee('Abraham ', 'Yetayeh')
var employee4 = new Employee()

console.log(employee0.fullName)
console.log(employee1.fullName)
console.log(employee2.fullName)
console.log(employee3.fullName)
console.log(employee4.fullName)
console.log(employee4)