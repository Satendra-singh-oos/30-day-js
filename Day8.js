/*
Day 8: ES6+ Features
Tasks/Activities:

Activity 1: Template Literals
• Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
• Task 2: Create a multiline string using template literals and log it to the console.

Activity 2: Destructuring
• Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
• Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

Activity 3: Spread and Rest Operators
• Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
• Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

Activity 4: Default Parameters
• Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter. Activity 5: Enhanced Object Literals
• Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
• Task 9: Create an object with computed property names based on variables and log the object to the console.

Feature Request:
1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

Achievement:
By the end of these activities, students will:
• Understand and use template literals for string interpolation and multi-line strings.
• Apply destructuring to extract values from arrays and objects.
• Utilize spread and rest operators for array manipulation and function arguments.
• Define functions with default parameters.
• Create objects using enhanced object literals, including methods and computed property names.

*/

function logNameAndAge(name, age) {
  console.log(`My Name is ${name} And My Age is ${age}`);
}

logNameAndAge("Jack", 10);

function multiLinePhrase(phrase) {
  console.log(phrase);
}

let learnCoding = `How to start learning web development?
- Learn HTML
- Learn CSS
- Learn JavaScript
Use freeCodeCamp to learn all the above and much, much more !
`;

multiLinePhrase(learnCoding);

function logFirstAndSecond(arr) {
  const [first, second] = arr;

  console.log("First Element Of Array", first);
  console.log("Second Element Of Array", second);
}

const number = [1, 2, 3, 4];
logFirstAndSecond(number);

function destructureObj(obj) {
  const { first, second } = obj;

  console.log("Name = ", first);
  console.log("Age = ", second);
}

const about = {
  name: "joe",
  age: 24,
  dob: "02/02/2022",
};
destructureObj(about);

function spreadArr(arr, value1, value2) {
  const newArr = [value1, value2, ...arr];

  console.log(newArr);
}

const arr = [1, 2, 3, 4];
spreadArr(arr, "Hello", "World !");

function sum(...number) {
  return number.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(10, 20, 30, 40));

function product(num1, num2 = 1) {
  return num1 * num2;
}

console.log(product(10, 20));
console.log(product(10));

const person = {
  name: "Person",
  age: 24,
  greet: function () {
    console.log(`My name is ${this.name}and my age is ${this.age}`);
  },
};

console.log(person);

person.greet();

const your_name = "Thor";
const your_age = Number.MAX_VALUE;
const your_city = "Nidavellir";
const object2 = { name: your_name, age: your_age, city: your_city };

console.log(object2);
