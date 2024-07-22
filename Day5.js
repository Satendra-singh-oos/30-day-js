/*
Day 5: Functions
Tasks/Activities:

Activity 1: Function Declaration
• Task 1: Write a function to check if a number is even or odd and log the result to the console.
• Task 2: Write a function to calculate the square of a number and return the result.

Activity 2: Function Expression
• Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
• Task 4: Write a function expression to concatenate two strings and return the result.

Activity 3: Arrow Functions
• Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
• Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

Activity 4: Function Parameters and Default Values
• Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
• Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

Activity 5: Higher-Order Functions
• Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
• Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result. Feature Request:

1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.

Achievement:
By the end of these activities, students will:
• Understand and define functions using function declarations, expressions, and arrow functions.
• Use function parameters and default values effectively.
• Create and utilize higher-order functions.
• Apply functions to solve common problems and perform calculations.
• Enhance code reusability and organization using functions.


*/

function checkEventOrNot(n) {
  if (n % 2 === 0) {
    console.log("Number is Even");
    return;
  } else {
    console.log("It Not A Even Number");
  }
}

checkEventOrNot(2);
checkEventOrNot("2");
checkEventOrNot(29);

function squareTheNum(n) {
  return n * n;
}

const num = squareTheNum(2);
console.log(num);

const findMax = function (a, b) {
  const max = a > b ? a : b;
  console.log(`The maximum number is ${max}`);
  return max;
};

findMax(10, 20);
findMax(30, 15);

const concatenatie = function (a, b) {
  return a + b;
};

console.log(concatenatie("Hellow", "World"));

const findSum = (a, b) => {
  return a + b;
};

console.log(findSum(10, 20));
console.log(findSum(3, 2));

const checkStringWithYourChar = (str, char) => {
  if (str.includes(char)) {
    return true;
  }
  return false;
};

console.log(
  checkStringWithYourChar("Hello world, welcome to the universe.", "w")
);

function product(a, b = 1) {
  return a * b;
}

console.log(product(10, 2));
console.log(product(10));

function greatingValue(name, age = 1) {
  return `Hello ${name} your age is ${age} , We are ${
    age > 1 ? " Happy" : "Regrat"
  } to ${
    age > 1 ? "Onboard" : "Not able to onboard you as your age is less then 1"
  } you`;
}

console.log(greatingValue("jack", 20));
console.log(greatingValue("joe"));

function HOFCallFn(fn, repeat = 0) {
  for (let i = 1; i <= repeat; i++) {
    fn(i);
  }
}

function printMe(num) {
  console.log(`I Got Call ${num}`);
  return;
}

HOFCallFn(printMe, 3);
HOFCallFn(printMe);

function HOF2(fn1, fn2, value) {
  const result1 = fn1(value);
  const result2 = fn2(result1);
  return result2;
}

function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

const initialValue = 10;
const result = HOF2(double, square, initialValue);
console.log(result);
