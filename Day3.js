/*
Day 3: Control Structures

Tasks/Activities:

Activity 1: If-Else Statements
• Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
• Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

Activity 2: Nested If-Else Statements
• Task 3: Write a program to find the largest of three numbers using nested if-else statements.

Activity 3: Switch Case
• Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
• Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.

Activity 4: Conditional (Ternary) Operator
• Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

Activity 5: Combining Conditions
Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console. Feature Request:


Feature Request:
1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

Achievement:
By the end of these activities, students will:
• Implement and understand basic if-else control flow.
• Use nested if-else statements to handle multiple conditions.
• Utilize switch cases for control flow based on specific values.
• Apply the ternary operator for concise condition checking.
• Combine multiple conditions to solve more complex problems.
*/

function checkNumber(a) {
  if (typeof a != "number") {
    console.log(`Your Type is Wrong , the provided value ${a} is ${typeof a} `);
    return;
  }
  if (a === 0) {
    console.log("Number is Zero");
    return;
  } else if (a > 0) {
    console.log("Number is Postive ");
    return;
  } else {
    console.log("Number is Negative");
    return;
  }
}
checkNumber(0);
checkNumber(10);
checkNumber(-91);
checkNumber("1");

function checkEligiblity(age) {
  if (age >= 18) {
    console.log("You Are Eligible To Vote ");
    return;
  } else {
    console.log("Your Are NOt Eligible To Vote");
  }
}

checkEligiblity(1);
checkEligiblity(18);
checkEligiblity(19);

function largestOutOfThree(a, b, c) {
  if (a >= b && a >= c) {
    console.log(`${a} is the largest number.`);
  } else if (b >= a && b >= c) {
    console.log(`${b} is the largest number.`);
  } else if (c >= a && c >= b) {
    console.log(`${c} is the largest number.`);
  } else {
    console.log("All the numbers are equal.");
  }
}
largestOutOfThree(5, 10, 3);
largestOutOfThree(10, 5, 10);
largestOutOfThree(7, 7, 7);
function checkDay(number) {
  switch (number) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log(
        `${number} is not a valid day number (must be between 1 and 7).`
      );
      break;
  }
}

// Example usage
checkDay(3);
checkDay(7);
checkDay(8);
checkDay(-1);

function checkGrade(score) {
  switch (true) {
    case score >= 90 && score <= 100:
      console.log(`Your grade for the score ${score} is: A`);
      break;
    case score >= 70 && score < 90:
      console.log(`Your grade for the score ${score} is: B`);
      break;
    case score >= 50 && score < 70:
      console.log(`Your grade for the score ${score} is: C`);
      break;
    case score >= 25 && score < 50:
      console.log(`Your grade for the score ${score} is: D`);
      break;
    case score >= 0 && score < 25:
      console.log(`Your grade for the score ${score} is: F`);
      break;
    default:
      console.log(`${score} is not in the range from 0 to 100.`);
      break;
  }
}

checkGrade(95);
checkGrade(85);
checkGrade(65);
checkGrade(45);
checkGrade(15);
checkGrade(105);
checkGrade(-1);

function checkNumberisEvenOrOdd(num) {
  if (typeof num != "number") {
    console.log("Not A Number");
    return;
  }
  const check = num % 2 === 0 ? "Even" : "Odd";
  console.log(`provided number ${num} is ${check}`);
}

checkNumberisEvenOrOdd(10);
checkNumberisEvenOrOdd(99);

function checkLeapYear(year) {
  if (year % 400 === 0) {
    console.log(`${year} is leap year`);
  } else if (year % 100 === 0) {
    console.log(`${year} is not the leap year`);
  } else if (year % 4 === 0) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
}
checkLeapYear(2000);
checkLeapYear(1900);
checkLeapYear(2024);
checkLeapYear(2023);
