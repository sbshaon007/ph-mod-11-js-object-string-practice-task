/* 

Task 1.1 — Spot the Difference

let str = "hello";
let arr = ["h", "e", "l", "l", "o"];

Log str.length and arr.length. What do you notice?
Try str[0] and arr[0]. Do both work the same way?
Try str.push("!") — what happens? Why does this fail for strings but not arrays?

Task 1.2 — Convert Between Them

Convert the string "JavaScript" into an array of characters.
Convert the array ["c", "a", "t"] back into a single string "cat".


*/



export let str = "hello";
let arr = ["h", "e", "l", "l", "o"];

console.log("String length is ", str.length);
console.log("Array length is ", arr.length);

console.log("[0] index of string is ", str[0]);
console.log("[0] index of array is", arr[0]);
console.log('They are same');

str.push('!');

// arr.push(!)

console.log(str);


