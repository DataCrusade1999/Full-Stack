/**
Set
Set is a collection of elements. Set can only contains unique elements. Lets see how to create a set
*/
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const setOfLangauges = new Set(languages)
console.log(setOfLangauges)
// Set is an iterable object and we can iterate through each elements.
for(const languages of setOfLangauges) {
    console.log(languages)
}
// Adding an element to the set and size which is written in braces infornt of set Ex.  Set{4} here 4 is the size.
setOfLangauges.add('Hindi')
console.log(setOfLangauges)
// Deleting the element.
setOfLangauges.delete('Hindi')
console.log(setOfLangauges)

/**
Checking an element in the set
The has method can help to know if a certain element exists in a set.
*/
console.log(setOfLangauges.has('Hindi'))

setOfLangauges.clear();
console.log(setOfLangauges)

/**
Union of sets
To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)
*/


let a = [1, 2, 3, 4, 5]
let b = ['Ashu','Ashu','Nick']
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

/**
Intersection of sets
To find an intersection of two sets can be achieved using filter. Lets find the union of set A and set B (A ∩ B)
*/
let d = [1, 2, 3, 4, 5]
let e = [3, 4, 5, 6]

let D = new Set(d)
let E = new Set(e)

let f = d.filter((num) => E.has(num))
let F = new Set(f)

console.log(F)