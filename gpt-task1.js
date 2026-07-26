/* 
Exercise: Student Profile Cleaner

let student = {
    name: "   shirsendu biswas   ",
    email: "SHIRSENDU@EMAIL.COM",
    course: "javascript fundamentals",
    city: "dhaka"
};

Your tasks:

Trim the extra spaces from name.
Convert email to lowercase.
Convert course to uppercase.
Add a new property:
active: true

Loop through the object using for...in and print each key-value pair like:

name: shirsendu biswas
email: shirsendu@email.com
course: JAVASCRIPT FUNDAMENTALS
city: dhaka
active: true
*/

let student = {
    name: "   shirsendu biswas   ",
    email: "SHIRSENDU@EMAIL.COM",
    course: "javascript fundamentals",
    city: "dhaka"
};

student.name = student.name.trim(); /* Trim */
student.email = student.email.toLowerCase(); /* Lowercase */
student.course = student.course.toUpperCase(); /* Uppercase */

student.active = true; /* adding new property */


console.log(student);



// Loop through the object using for...in and print each key-value pair

for (const key in student){

    const value = student[key];
    console.log(key,"-",value);
    
}

/* 
Ouput

{
  name: 'shirsendu biswas',
  email: 'shirsendu@email.com',
  course: 'JAVASCRIPT FUNDAMENTALS',
  city: 'dhaka',
  active: 'true'
}
name - shirsendu biswas
email - shirsendu@email.com
course - JAVASCRIPT FUNDAMENTALS
city - dhaka
active - true

*/

