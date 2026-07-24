/* 
Task 3.1 — Slicing Strings
let sentence = "Learning JavaScript is fun!";
Get just the word "Learning" using .slice().
Get the last 4 characters ("fun!") using .slice() with a negative index.

*/

let sentence = "Learning JavaScript is fun!";

let word = sentence.slice(0,8);

let funWord = sentence.slice(-4);

console.log("I have to get the word >> ",word);

console.log("I have to get the last 4 chars >> "+ funWord);


/* 
Output

I have to get the word >>  Learning
I have to get the last 4 chars >> fun!

*/