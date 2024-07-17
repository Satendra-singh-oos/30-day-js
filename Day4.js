/*
Day 4: Loops Tasks/Activities:
Activity 1: For Loop
• Task 1: Write a program to print numbers from 1 to 10 using a for loop.
• Task 2: Write a program to print the multiplication table of 5 using a for loop.

Activity 2: While Loop
• Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
• Task 4: Write a program to print numbers from 10 to 1 using a while loop.

Activity 3: Do...While Loop
• Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
• Task 6: Write a program to calculate the factorial of a number using a do...while loop.

Activity 4: Nested Loops
• Task 7: Write a program to print a pattern using nested for loops:

*
* *
* * *
* * * *
* * * * *

Activity 5: Loop Control Statements
• Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
• Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

Feature Request:
1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.

Achievement:
By the end of these activities, students will:
• Understand and use for loops to iterate over a sequence of numbers.
• Utilize while loops for iteration based on a condition.
• Apply do...while loops to ensure the loop body is executed at least once. 
• Implement nested loops to solve more complex problems.
• Use loop control statements (break and continue) to control the flow of loops.
*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

function table(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = `, i * n);
  }
}
table(5);

function calculateSum(n) {
  let i = 1;
  let sum = 0;
  while (i <= n) {
    sum = sum + i;
    i++;
  }
  console.log("Sum of n is = ", sum);
}

calculateSum(10);

function printReverse(n) {
  console.log("Reverese Order Start here");
  while (n != 0) {
    console.log(n);
    n--;
  }
  console.log("Reverse End here");
}

printReverse(10);

function printNum(n) {
  console.log("Do While Start");
  do {
    console.log(n);
    n = n - 1;
  } while (n != 0);
  console.log("Do While End");
}

printNum(5);

function getFactorial(n) {
  let fact = 1;
  let temp = n;
  do {
    fact = fact * temp;
    temp--;
  } while (temp > 0);

  console.log(`Factorial of the given number ${n} is ` + fact);
}

getFactorial(3);

// patter priting

function printRightAngleTriangle(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += "* ";
    }
    pattern += "\n"; // Add a newline character at the end of each row
  }
  console.log(pattern);
}

printRightAngleTriangle(5);

function skip5(n) {
  console.log("skip 5");
  for (let i = 0; i < n; i++) {
    if (i === 5) {
      continue;
    }
    console.log(`${i}`);
  }
}
skip5(10);

function stopLoopAt7(n) {
  console.log("Stop At 7");

  for (let i = 0; i < n; i++) {
    if (i === 8) {
      break;
    }
    console.log(`${i}`);
  }
}
stopLoopAt7(10);
