/* 
Exercise: Reverse a string with a for loop

Given:

const word = "Developer";

Task
Reverse the string character by character using a for loop.

Expected output:
repoleveD

Rules
Do not use:
split()
reverse()
join()

You must use a loop.
*/

const word = "Developer";

let reversed = "";

for ( let i = word.length-1 ; i >= 0 ; i-- ){

    const letter = word[i];
    reversed = reversed + letter;
    console.log(reversed);
    

}

