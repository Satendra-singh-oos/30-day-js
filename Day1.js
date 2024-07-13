// Day 1: Variables and Data Types
// Tasks/Activities:
// Activity 1: Variable Declaration
// • Task 1: Declare a variable using var, assign it a number, and log the value to the console.
// -> Task 2: Declare a variable using let, assign it a string, and log the value to the console.
// Activity 2: Constant Declaration
// • Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
// Activity 3: Data Types
// -> Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator. Activity 4: Reassigning Variables
// • Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
// Achievement:
// By the end of these activities, you will:
// -> know how to declare variables using var, let, and const.
// • Understand the different data types in JavaScript.
// • Be able to use the typeof operator to identify the data type of a variable.
// Understand the concept of variable reassignment and the immutability of const variables.

var num = 10;
console.log(num);

let str = "string";
console.log(str);

const bool = true;
console.log(bool);

const obj = {
  name: "myName",
  age: 20,
  hello: true,
};

const arr = [1, "str", false];

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof obj);
console.log(typeof arr);

/* Activity 5: Understanding const*/

const iAmConst = 1;

function fn() {
  const newConst = 2;
  console.log("i can access iAmConst Here " + iAmConst);
}

console.log("i cannot access newConst here" + newConst);

const updateMe = 10;
updateMe = false; // TypeError: Assignment to constant variable.

console.log(updateMe);

function variblesTypeConsole(a, b) {
  console.log(a + "My Type" + typeof a);
  console.log(b + "My Type" + typeof b);
}

variblesTypeConsole(1, true);
variblesTypeConsole(obj, str);

let letCanUpdate = "hi";
letCanUpdate = false;

console.log(letCanUpdate);

const constCantUpdate = "hi";
constCantUpdate = false;
console.log(constCantUpdate);
