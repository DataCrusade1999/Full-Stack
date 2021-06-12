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


// Replacing a substring
// replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
var txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/python/gi, 'JavaScript') 
console.log(matchReplaced)


var txt = '%I a%m stu%%d%%e%n%t a%n%d %% I l%o%ve lear%n%in%g.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%on a%n%d e%m%p%ow%er%ing \
my%se%lf% a%n%d o%t%h%e%r p%e%o%ple.\
I fo%und lear%n%in%g m%ore i%n%t%er%%es%ting t%h%an any other %hobbies. \
  D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a stu%%d%%e%n%t?'

matches = txt.replace(/%/g, '')
console.log(matches)


/**
[]: A set of characters
[a-c] means, a or b or c
[a-z] means, any letter a to z
[A-Z] means, any character A to Z
[0-3] means, 0 or 1 or 2 or 3
[0-9] means any number 0 to 9
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
\: uses to escape special characters
\d mean:match where the string contains digits (numbers from 0-9)
\D mean: match where the string does not contain digits
. : any character except new line character(\n)
^: starts with
r'^substring' eg r'^love', a sentence which starts with a word love
r'[^abc] mean not a, not b, not c.
$: ends with
r'substring$' eg r'love$', sentence ends with a word love
*: zero or more times
r'[a]*' means a optional or it can be occur many times.
+: one or more times
r'[a]+' mean at least once or more times
?: zero or one times
r'[a]?' mean zero times or once
{3}: Exactly 3 characters
{3,}: At least 3 character
{3,8}: 3 to 8 characters
|: Either or
r'apple|banana' mean either of an apple or a banana
(): Capture and group
*/

var pattern = /[lL]earning|[lL]anguage/g // this square bracket mean either L or l
var txt = 'JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language \
I am student and  I love learning.There is nothing as more rewarding as education and empowering myself and other people. \
I found learning more interesting than any other hobbies.Does this motivate you to be a student? '

var matches = txt.match(pattern)

console.log(matches)  


// Escape character(\) in RegExp


var pattern = /\d+/g  // d is a special character which means digits
var txt = 'This regular expression example was made in October 08,  1999.'
var matches = txt. match(pattern)

console.log(matches)  // ["12", "2020"], this is not what we want


// Period(.)

var pattern = /[a].?/g  // this square bracket means a and . means any character except new line
var txt = 'Apple and banana are fruits'
var matches = txt.match(pattern)

console.log(matches)  // ["an", "an", "an", "a ", "ar"]


// Zero or more times(*)
// Zero or many times. The pattern could may not occur or it can occur many times.


var pattern = /[a].*/g  //. any character, + any character one or more times 
var txt = 'Apple and banana are fruits'
var matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']

// Zero or one times(?)
// Zero or one times. The pattern could may not occur or it may occur once.

var txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
var pattern = /[Ee]-?mail/g  // ? means optional
matches = txt.match(pattern)

console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]

// Quantifier in RegExp
// We can specify the length of the substring we look for in a text, using a curly bracket.
// Lets imagine, we are interested in substring that their length are 4 characters

var txt = 'JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language \
I am student and  I love learning.There is nothing as more rewarding as education and empowering myself and other people. \
I found learning more interesting than any other hobbies.Does this motivate you to be a student? '
var pattern = /[i]{1}/g   
var matches = txt.match(pattern)
console.log(matches)  


// Cart ^
// Starts with
var txt = 'JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language \
I am student and  I love learning.There is nothing as more rewarding as education and empowering myself and other people. \
I found learning more interesting than any other hobbies.Does this motivate you to be a student? '
var pattern = /^JavaScript/gi 
var matches = txt.match(pattern)
console.log(matches)  


// Negation
var txt = 'This regular expression example was made in December 6,  2019.'
var pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no coma no period
var matches = txt.match(pattern)
console.log(matches)  // ["6", "2019"]

// Exact match
// It should have ^ starting and $ which is an end. output is true or false

var pattern = /^[A-Z][a-z]{3,12}$/;
var name = 'Asabeneh';
var result = pattern.test(name)

console.log(result) 
