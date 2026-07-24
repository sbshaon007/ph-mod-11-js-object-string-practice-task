
/* 
Task 1.2 — Convert Between Them

Convert the string "JavaScript" into an array of characters.
Convert the array ["c", "a", "t"] back into a single string "cat".

*/

const strJs = 'JavaScript';

const arrJs = strJs.split("");

// console.log("JavaScript converted into an array ", arrJs);

/* 
Output

JavaScript converted into an array  [
  'J', 'a', 'v', 'a',
  'S', 'c', 'r', 'i',
  'p', 't'
]
*/

// note : split() creates a new array, it doesn't change the string. So you have to set e new array name.


const arr = ["c", "a", "t"];

const strCat = arr.join('');

console.log("array to string " + strCat);


/* 
Output

array to string  cat
*/


// note : join() creates a new string, it doesn't change the original array. So you have to set e new string name.

