/* 
Exercise 5: Count letters in a string

let data = {
    word: "banana"
};

Tasks:

Create an empty object called letterCount.
Loop through data.word.
Count how many times each letter appears.

Expected:

{
  b: 1,
  a: 3,
  n: 2
}
*/

let data = {
    word: "banana"
};

let letterCount = {};

for(const letter of data.word){

    letterCount[letter] = (letterCount[letter] || 0) + 1;

    
}

console.log(letterCount);

