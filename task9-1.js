/* 
Task 9.1 — Contact Book

Build a small "contact" system:

let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};

Convert the email to lowercase and update the object.

Loop through the contact object and print each key-value pair.

Add a new property favoriteWords: [] (an array) — push 3 words to it.

Reverse the name string just for fun using one of your three reverse functions from Task 4.1.

Check if the email includes "@email.com" (case-insensitive) and log a confirmation message.

*/

let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};


/* Convert the email to lowercase and update the object. */

let emailLowercase = contact.email.toLowerCase();

contact['email'] = emailLowercase;

console.log("With lowercase email",contact);


/* Loop through the contact object and print each key-value pair. */


for (const key in contact) {
    
    const value = contact[key];

    console.log(key,"-", value); 
    
}

console.log("======================");


/* Add a new property favoriteWords: [] (an array) — push 3 words to it.  */

contact.favoriteWords = [];

contact.favoriteWords.push("code");
contact.favoriteWords.push("JavaScript");
contact.favoriteWords.push("Programming");

console.log("New property added",contact);

console.log("======================");

/* Reverse the name string just for fun using one of your three reverse functions from Task 4.1. */

let nameSplit= contact.name.split("");

console.log("'name' key converted to array using split",nameSplit);

let nameReversed = nameSplit.reverse();

console.log("Splited name got reversed",nameReversed);

let revNameJoin = nameReversed.join('');

console.log("======================");

console.log("Splited and reversed name got joined >>", revNameJoin);

console.log("Name got reversed and joined in one line code >> ",contact.name.split("").reverse().join(""));


/* Check if the email includes "@email.com" (case-insensitive) and log a confirmation message. */

let emailValidation = contact.email.includes("@email.com");

console.log("Email includes '@email.com' is", emailValidation);


/* Even safer version:

let emailValidation = contact.email.toLowerCase().includes("@email.com"); */


/* 


/* =================================================== */



/* output

With lowercase email { name: 'Alex Johnson', email: 'alex@email.com', phone: '555-1234' }
name - Alex Johnson
email - alex@email.com
phone - 555-1234
======================
New property added {
  name: 'Alex Johnson',
  email: 'alex@email.com',
  phone: '555-1234',
  favoriteWords: [ 'code', 'JavaScript', 'Programming' ]
}
======================
'name' key converted to array using split [
  'A', 'l', 'e', 'x',
  ' ', 'J', 'o', 'h',
  'n', 's', 'o', 'n'
]
Splited name got reversed [
  'n', 'o', 's', 'n',
  'h', 'o', 'J', ' ',
  'x', 'e', 'l', 'A'
]
======================
Splited and reversed name got joined >> nosnhoJ xelA
Name got reversed and joined in one line code >>  nosnhoJ xelA
Email includes '@email.com' is true


*/ 



/* 

Task 4.1 — Three Reversal Methods

Write a function reverseString(str) three different ways:

Using .split(""), .reverse(), and .join("")
Using a for loop that builds the reversed string character by character


Test all three with "JavaScript" → should return "tpircSavaJ".
Bonus: Which method do you think is fastest? Why?


*/
