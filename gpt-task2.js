/* 
Exercise: Product Formatter

Given:

let product = {
    name: "   wireless mouse   ",
    brand: "LOGITECH",
    category: "electronics",
    price: 1200,
    inStock: true
};

Your tasks:

Trim the extra spaces from name.
Convert brand to lowercase.
Convert category to uppercase.
Add a new property:
discount: 10
Create a new property called finalPrice.

The finalPrice should be:

price - discount

So expected final price:

1190
Loop through the object using for...in and print every key-value pair.

Expected style:

name: wireless mouse
brand: logitech
category: ELECTRONICS
price: 1200
inStock: true
discount: 10
finalPrice: 1190

*/

let product = {
    name: "   wireless mouse   ",
    brand: "LOGITECH",
    category: "electronics",
    price: 1200,
    inStock: true
};

product.name = product.name.trim();
product.brand = product.brand.toLowerCase();
product.category = product.category.toUpperCase();

product.discount = 10;
product.finalPrice = product.price - product.discount;

console.log(product);


for (const key in product) {

    const value = product[key];

    // console.log(key, ":", value);

    const result = `${key}: ${value}`;

    console.log(result);


}

