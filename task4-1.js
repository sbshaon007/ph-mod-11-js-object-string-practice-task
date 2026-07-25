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

// console.log(strSplit);

const revStr = strSplit.reverse();

// console.log(revStr);

let reversedStr = '';

for (const letter of revStr){

    reversedStr = reversedStr + letter;

    console.log(letter,'>', reversedStr);
    
}

/* 
Output

t > t
p > tp
i > tpi
r > tpir
c > tpirc
S > tpircS
a > tpircSa
v > tpircSav
a > tpircSava
J > tpircSavaJ


*/


