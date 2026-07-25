/* 
Task 7.2 — Nested Objects

let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701"
  }
}

Log the city using dot notation chaining.
Add a country property inside the address.
Delete the zip property from the nested object.

*/


let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701"
  }
}

user.address.country = 'United States';


console.log('Getting the city using dot notation -', user.address.city);


console.log('Added country using dot is', user);

delete user.address.zip;

console.log('Zip got deleted', user);


/* 
Output

Getting the city using dot notation - Austin

Added country using dot is {
  username: 'coder123',
  address: { city: 'Austin', zip: '78701', country: 'United States' }
}

Zip got deleted {
  username: 'coder123',
  address: { city: 'Austin', country: 'United States' }
}
*/

