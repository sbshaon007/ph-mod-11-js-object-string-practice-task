/* 
Task 2.1 — Case Conversion

let name = "JavaScript";

Print the uppercase version.
Print the lowercase version.
Print the string with whitespace trimmed: "   hi there   " → "hi there"

*/

let name = "JavaScript";

let upperCaseName = name.toUpperCase();
let lowerCaseName = name.toLowerCase();

console.log("Name in uppercase "+ upperCaseName);
console.log("Name in lowercase "+ lowerCaseName);



let stringHi = "   hi there   ";

console.log("With white space ---  ", stringHi, "--------");


let stringTrimmed = stringHi.trim();

console.log("With no whitespace --- "+ stringTrimmed,  "--------" );

/* 
Output

Name in uppercase JAVASCRIPT
Name in lowercase javascript
With white space ---      hi there    --------
With no whitespace --- hi there --------
*/


// note: always try to store the value of new string and array.