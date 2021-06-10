/**
Regular Expressions
A regular expression or RegExp is a small programming language that helps to find pattern in data.
A RegExp can be used to check if some pattern exists in a different data types. To use RegExp in JavaScript 
either we use RegExp constructor or we can declare a RegExp pattern using two forward slashes followed by a flag.We can create a pattern in two ways.

To declare a string we use a single quote, double quote a backtick to declare a regular expression we use two forward slashes and an optional flag.
The flag could be g, i, m, s, u or y.

RegExp parameters
A regular expression takes two parameters. One required search pattern and an optional flag.

Pattern
A pattern could be a text or any form of pattern with some sort of similarity.
For instance the word spam in an email could be a pattern we are interested to look for in an email
or a phone number format number might be our interest to look for.

Flags
Flags are optional parameters in a regular expression which determine the type of searching. Let see some of the flags:

g:is a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline
*/

// Creating a pattern with RegExp Constructor
// Declaring regular expression without global flag and case insensitive flag.


let regEx = new RegExp('love','gi')
console.log(regEx)

/**
Creating a pattern without RegExp Constructor
Declaring regular expression with global flag and case insensitive flag.

let regEx= /love/gi
 */


// Testing for a match
// test():Tests for a match in a string. It returns true or false.

var str = 'I am learning JavaScript'
var pattern = /javascript/i
var result = pattern.test(str)
console.log(result)

/**
Array containing all of the match
match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. 
If we do not use a global flag, match() returns an array containing the pattern, index, input and group.
*/


// Without using 'g' or global flag.
var str = 'I am learning JavaScript'
var pattern = /javascript/i
var result = str.match(pattern)
console.log(result)


// Using global flag.
var str = 'I am learning JavaScript'
var pattern = /javascript/gi
var result = str.match(pattern)
console.log(result)


// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

var str = 'I am learning JavaScript'
var pattern = /javascript/i
var result = str.search(pattern)
console.log(result)