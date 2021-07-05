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
      this.score = 0
      this.skills = []
  }
  getCityName() {
    const cityName = this.lastName + ' ' + 'City'
    return cityName
  }

  get getFirstName() {
    return this.firstName
  }

  /**
   * @param {string | number} score
   */
  set setScore(score){
    this.score =+ score

  }

  static favoriteSkill() {
    var skills = ['HTML', 'CSS', 'Javascript', 'React', 'Python', 'Node']
    var index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }

  /**
   * @param {any} skill
   */
  set setSkill(skill) {
    this.skills.push(skill)
  }

  getPersonalInfo() {
    var text = `Name of the employee is ${this.firstName} ${this.lastName} He lives in ${this.city} and his skills are ${this.skills} etc.`
    return text

  }

  /**
   * @param {any} city
   */
  set setCity(city){
    this.city = city
  }
}

var employee0 = new Employee('Ashutosh', 'Pandey')
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

/**
Class methods
The constructor inside a class is a builtin function which allow us to create a blueprint for the object. In a class we can create class methods.
Methods are JavaScript functions inside the class. Let us create some class methods.
*/
console.log(employee0.getCityName())


/**
Properties with initial value
When we create a class for some properties we may have an initial value. For instance if you are playing a game, you starting score will be zero.
So, we may have a starting score or score which is zero. In other way, we may have an initial skill and we will acquire some skill after some time.
*/


/**
getter
The get method allow us to access value from the object. We write a get method using keyword get followed by a function.
Instead of accessing properties directly from the object we use getter to get the value. See the example bellow
*/
console.log(employee0.getFirstName)

/**
setter
The setter method allow us to modify the value of certain properties. We write a setter method using keyword set followed by a function.
See the example bellow.
*/

employee0.setScore = 01;
employee0.setSkill = 'Gliding'
console.log(employee0.score)
employee0.setSkill = 'Jumping'
console.log(employee0.skills)


employee0.setCity = 'Kanpur'
console.log(employee0.city)

console.log(employee0.getPersonalInfo())

/**
Static method
The static keyword defines a static method for a class. Static methods are not called on instances of the class. 
Instead, they are called on the class itself. These are often utility functions, such as functions to create or clone objects.
An example of static method is Date.now(). The now method is called directly from the class.
*/

console.log(Employee.favoriteSkill())