/* 
Task 6.1 — Dot vs Bracket Notation

let car = {  brand: "Toyota", model: "Corolla", year: 2022 };
Get brand using dot notation.
Get model using bracket notation.
Add a new property color: "blue" using bracket notation.
Update year to 2023 using dot notation.

*/

let car = { brand: "Toyota", model: "Corolla", year: 2022 };

car.color = 'blue';

car.year = 2023;

console.log('Brand name using dot notation - ',car.brand);

console.log('Model using bracket notation - ', car['model']);

console.log(car);

console.log('New color property is', car.color);

console.log('Updated car year is',car.year);






