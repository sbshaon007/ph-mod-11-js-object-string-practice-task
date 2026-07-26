const word = "Frontend";

let reversed = '';

for(const letter of word){

    reversed = letter + reversed;

    console.log(letter, ">", reversed);
    
}