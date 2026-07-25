/* 
Task 8.1 — Loop Through Properties

let scores = { math: 90, science: 85, art: 95 };

Use a for...in loop to log each key and value like: math: 90.

Calculate the average of all values in the loop.

*/

let scores = { math: 90, science: 85, art: 95 };

let sumOfValue = 0;

for ( const key in scores){

    const value = scores[key];
    console.log(key,":", value);
    
    sumOfValue = sumOfValue + value;
    
}

let lengthOfKeys = Object.keys(scores).length;

// let avgOfValue = sumOfValue / Object.keys(scores).length;

let avgOfValue = sumOfValue/lengthOfKeys;

console.log("Sum of value",sumOfValue);

console.log('Average of value', avgOfValue);

console.log("Length of keys is ",lengthOfKeys);


/* 
Output

math : 90
science : 85
art : 95
Sum of value 270
Average of value 90

*/


// Note >>>>>>  Better habit: let avgOfValue = sumOfValue / Object.keys(scores).length;

