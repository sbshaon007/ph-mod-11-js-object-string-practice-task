/* 
Task 3.2 — Combine Strings
Use .concat() to join "Hello" and "World" into "Hello World".
Use + and template literals to do the same thing. Compare all three approaches.

*/

const word1 = 'Hello';
const word2 = 'World';

console.log("Contacing hello-world > ", word1.concat(" ",word2));

console.log("Contacing hello-world with (+) > ", word1 +" "+ word2);

console.log(`Contacing hello-world with template literals >`, `${word1} ${word2}`);


/* 
Output

Contacing hello-world >  Hello World
Contacing hello-world with (+) >  Hello World
Contacing hello-world with template literals > Hello World
*/

// ======================================================================

/* 
GPT exercise

Exercise 1: Introduce yourself

Given:

const name = "SB";
const course = "Full Stack Web Development";

Use a template literal to print:

My name is SB and I am learning Full Stack Web Development.
*/


const name = "SB";
const course = "Full Stack Web Development";

const sentence = `My name is ${name} and I'm learning ${course}.`;

console.log(sentence);

/* 
Output

My name is SB and I'm learning Full Stack Web Development

*/

// ==============================================================================


/* 
Exercise 2: Product price message

Given:

const product = "Laptop";
const price = 50000;

Use a template literal to print:

The price of Laptop is 50000 taka.
*/

const product = "Laptop";
const price = 50000;

console.log(`The price of ${product} is ${price} taka.`);


/* 
Output

The price of Laptop is 50000 taka
*/