/* 
Task 7.1 — Keys and Values

let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };

Get an array of all keys 
Get an array of all 
Delete the pages property using delete.

*/

let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };

let keys = Object.keys(book);

let array = Object.entries(book);

delete book.pages;


console.log("Keys of the object",keys);

console.log("Array of all is", array);

console.log("Page key is deleted ", book);


/* 
Output

Keys of the object [ 'title', 'author', 'pages' ]
Array of all is [
  [ 'title', 'The Hobbit' ],
  [ 'author', 'Tolkien' ],
  [ 'pages', 310 ]
]
Page key is deleted  { title: 'The Hobbit', author: 'Tolkien' }
*/