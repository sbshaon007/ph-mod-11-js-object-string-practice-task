/* 
Task 4.1 — Three Reversal Methods

Write a function reverseString(str) three different ways:
Using .split(""), .reverse(), and .join("")
Using a for loop that builds the reversed string character by character


Test all three with "JavaScript" → should return "tpircSavaJ".
Bonus: Which method do you think is fastest? Why?

*/

const str = "JavaScript";

const strSplit = str.split("");

console.log("Original string is", str);


console.log("This is an array ", strSplit); /**  string got converted to array using split (). Split creates a new array **/

const strSplitRev = strSplit.reverse();

console.log('Array got reversed here ', strSplitRev);

const reversedArrayJoin = strSplitRev.join("");

console.log("Here array got joined and converted to string again --",reversedArrayJoin);






