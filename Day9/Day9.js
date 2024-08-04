/*
Day 9: DOM Manipulation

Tasks/Activities:

Activity 1: Selecting and Manipulating Elements
• Task 1: Select an HTML element by its ID and change its text content.
• Task 2: Select an HTML element by its class and change its background color.

Activity 2: Creating and Appending Elements
• Task 3: Create a new div element with some text content and append it to the body.
• Task 4: Create a new li element and add it to an existing ul list.

Activity 3: Removing Elements
• Task 5: Select an HTML element and remove it from the DOM.
• Task 6: Remove the last child of a specific HTML element.

Activity 4: Modifying Attributes and Classes
• Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
• Task 8: Add and remove a CSS class to/from an HTML element.

Activity 5: Event Handling
• Task 9: Add a click event listener to a button that changes the text content of a paragraph. 
• Task 10: Add a mouseover event listener to an element that changes its border color.

Feature Request:
1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.
2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.
3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.
5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions. Achievement:

By the end of these activities, students will:
• Select and manipulate DOM elements using JavaScript.
• Create and append new elements to the DOM.
• Remove elements from the DOM.
• Modify attributes and classes of HTML elements.
• Add and handle events to make web pages interactive.

*/

const taks1 = document.getElementById("task1");
taks1.textContent = "Task No: 1";

const task2Element = document.getElementsByClassName("task2");

const task2 = task2Element[0];
task2.style.backgroundColor = "#00FF00";

const task3GetBody = document.body;

const taks3Div = document.createElement("h1");
taks3Div.textContent = "Task 3 Done";

task3GetBody.appendChild(taks3Div);

const ul = document.querySelector(".task4");

const li1 = document.createElement("li");
const li2 = document.createElement("li");
li1.textContent = "This is li 1";
li2.textContent = "This is li 2";

ul.appendChild(li1);
ul.appendChild(li2);

const parentNodeTask5 = document.querySelector(".task5");
const childNode = document.querySelector(".removeNode");
const throwawayNode = parentNodeTask5.removeChild(childNode);

const parentNodeTask6 = document.querySelector(".task6");

if (parentNodeTask6.lastElementChild) {
  parentNodeTask6.removeChild(parentNodeTask6.lastElementChild);
}

const task7Img = document.querySelector(".task7");

task7Img.src =
  "https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-01.jpg";

const task8 = document.querySelector(".task8");

task8.classList.add("highlight");

function task8Remove() {
  task8.classList.remove("highlight");
}

function task9() {
  const task9Paragraph = document.querySelector(".task9");
  task9Paragraph.textContent = "Hello World!";
}

const changeTextButton = document.querySelector(".taks9Btn");
changeTextButton.addEventListener("click", task9);

const task10 = document.querySelector(".task10");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

task10.addEventListener("mouseover", () => {
  const color = getRandomColor();

  task10.style.borderColor = color;
});
