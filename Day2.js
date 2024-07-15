/*
Day 2: Operators
Tasks/Activities:

Activity 1: Arithmetic Operations
• Task 1: Write a program to add two numbers and log the result to the console.
• Task 2: Write a program to subtract two numbers and log the result to the console.
• Task 3: Write a program to multiply two numbers and log the result to the console.
• Task 4: Write a program to divide two numbers and log the result to the console.
• Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

Activity 2: Assignment Operators
• Task 6: Use the += operator to add a number to a variable and log the result to the console.
• Task 7: Use the -- operator to subtract a number from a variable and log the result to the console.

Activity 3: Comparison Operators
• Task 8: Write a program to compare two numbers using > and < and log the result to the console.
• Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
• Task 10: Write a program to compare two numbers using == and === and log the result to the console.

Activity 4: Logical Operators
• Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
• Task 12: Write a program that uses the operator to combine two conditions and log the result to the console.
• Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

Activity 5: Ternary Operator
•  Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

Feature Request:
1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results. 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
3. Ternary Opreation Script : Write  a script that uses the ternary operation to detarmine is number is postive or negative and logs the result 
Achievement:
By the end of these activities, students will:
• Understand and use arithmetic operators to perform basic calculations.
• Use assignment operators to modify variable values.
• Compare values using comparison operators.
. Combine conditions using logical operators.
• Use the ternary operator for concise conditional expressions.

*/

function addTwoNum(a, b) {
  //   console.log("sum = ", a + b);

  const sum = a + b;
  console.log("Sum = ", sum);
}

addTwoNum(5, 10);

function subtractTwoNum(a, b) {
  const sub = b - a;

  console.log("Absolute Sub = ", sub);
}
subtractTwoNum(5, 20);

function multiply(a, b) {
  const multi = a * b;
  console.log("Multi = ", multi);
}

multiply(2, 4);

function divide(a, b) {
  const ans = a / b;
  console.log("Divide = ", ans);
}

divide(10, 5);

function findRemender(a, b) {
  const rem = a % b;
  console.log(rem);
}

findRemender(29, 5);

let num = 10;
num += 5;

console.log("+= " + num);

let num2 = 20;
num2 -= 10;
console.log("-= " + num2);

function compare(a, b) {
  if (a > b) {
    console.log(`${a} is greater than ${b}`);
  } else if (a < b) {
    console.log(`${b} is greater than ${a}`);
  } else {
    console.log(`${a} and ${b} are equal`);
  }
}

compare(20, 10);
compare(10, 20);
compare(10, 10);

function compareOrEqual(a, b) {
  if (a >= b) {
    console.log(`${a} is greater than or equal to ${b}`);
  } else if (a <= b) {
    console.log(`${b} is greater than or equal to ${a}`);
  }
}

compareOrEqual(20, 20);
compareOrEqual(20, 10);
compareOrEqual(10, 20);

function compareOperater(a, b) {
  if (a === b) {
    console.log(`${a} and ${b} are equal and there type are also same `);
  } else if (a == b) {
    console.log(`${a} and ${b} are equal but there type are not same `);
  }
  console.log(`${a} and ${b} is not equal`);
}
compareOperater(20, "20");
compareOperater(20, 20);
compareOperator(20, 10);

function checkDrivingLicence(age, hasDrivingLicense) {
  if (age >= 18 && hasDrivingLicense) {
    console.log("You are allowed to drive.");
  } else {
    console.log("You are not allowed to drive.");
  }
}
checkDrivingLicence(20, 8);

function checkHasTicket(ticket, staff) {
  if (ticket || staff) {
    console.log("You are allowed to enter the event.");
  } else {
    console.log("You are not allowed to enter the event.");
  }
}

checkHasTicket(false, true);

const isRaining = true;

if (!isRaining) {
  console.log("You can go gym 💪.");
} else {
  console.log("You should stay indoors 😀.");
}

function doAlArithmetic(a, b) {
  const sum = a + b;
  console.log("Sum =", sum);

  const sub = a - b;
  console.log("Subtract =", sub);

  const multi = a * b;
  console.log("Multiply = ", multi);

  const divide = a / b;
  console.log("Divide = ", divide);

  const remainder = a % b;

  console.log("Remainder = ", remainder);
}

doAlArithmetic(100, 10);

function compareAll(a, b) {
  switch (true) {
    case a > b:
      console.log(`${a} is greater than ${b}`);
      break;
    case a < b:
      console.log(`${b} is greater than ${a}`);
      break;
    case a === b:
      console.log(`${a} is equal and also of the same type as ${b}`);
      break;
    case a == b:
      console.log(`${a} is equal to ${b}`);
      break;
    case a !== b:
      console.log(`${a} is not equal to ${b}`);
      break;
    default:
      console.log("No comparison matched.");
  }
}

// Test cases
compareAll(10, 20);
compareAll(20, 10);
compareAll(10, 10);
compareAll("10", 10);
compareAll("15", 10);

function terneryOperation(a) {
  const ans = a > 0 ? "Positive Numebr" : "Negitive Number";
  console.log(ans);
}

terneryOperation(20);
terneryOperation(-100);
