/*
Window Scope
Without using console.log() open your browser and check, you will see the value of a and b if you write a or b on the browser. 
That means a and b are already available in the window. 
*/

/*
Global scope
A globally declared variable can be accessed every where in the same file. But the term global is relative.
It can be global to the file or it can be global relative to some block of codes. 
*/

let a = 'JavaScript'
let b = 10 
function letsLearnScope() {
  console.log(a, b) 
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) 
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b) 

/*
Local scope
A variable declared as local can be accessed only in certain block code.In the above example we can see 'Python' and 100 are local variable.
*/

/*
Now, you have an understanding of scope. A variable declared with var only scoped to function but variable declared with
let or const is block scope(function block, if block, loop etc). 
Block in JavaScript is a code in between two curly brackets ({}).In ES6 and above there is let and const, so you will not suffer from the sneakiness of var.
When we use let our variable is block scoped and it will not infect other parts of our code.
*/


// Object with values(dictionary like python)

let name = {firstName:'Ashutosh',lastName:'Pandey',skills:['HTML','CSS','Bootstrap']};

console.log(name.firstName);
console.log(name['firstName']);
console.log(name.skills);
console.log(name.skills[1]);
// Object.assign: To copy an object without modifying the original object
const copyPerson = Object.assign({}, name);
console.log(copyPerson);
// Object.keys: To get the keys or properties of an object as an array
console.log(Object.keys(name));
// Object.values:To get values of an object as an array
console.log(Object.values(name));
// Object.entries:To get the keys and values in an array
console.log(Object.entries(name));
// hasOwnProperty: To check if a specific key or property exist in an object
console.log(name.hasOwnProperty('firstName'));