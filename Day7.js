/*

Day 7: Objects
Tasks/Activities:

Activity 1: Object Creation and Access
• Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
• Task 2: Access and log the title and author properties of the book object.

Activity 2: Object Methods
• Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
• Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

Activity 3: Nested Objects
• Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console. 
• Task 6: Access and log the name of the library and the titles of all the books in the library.

Activity 4: The this Keyword
• Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method. Activity 5: Object Iteration
• Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
• Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

Feature Request:
1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.
3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys / Object.values. 


Achievement:
By the end of these activities, students will:
• Create and manipulate objects with properties and methods.
• Understand and use the this keyword in object methods.
• Work with nested objects and arrays of objects.
Iterate over an object's properties using loops and built-in methods.



*/

function bookObjectScript() {
  const Obj = {
    title: "Book Of My Mission",
    author: "My Life",
    year: 2001,
    method: function () {
      return `The Title is ${this.title} and the author is ${this.author}`;
    },
    methordUpdateYear: function (year) {
      this.year = year;
    },
  };

  console.log(Obj);

  console.log(
    `➡️   The Titile of the book is ${Obj.title} and the author of the book i ${Obj.author}`
  );

  console.log(Obj.method());
  Obj.methordUpdateYear(200);
  console.log("Update the year of the book");
  console.log(Obj);
}

bookObjectScript();

function library() {
  const library = {
    name: "My Library",
    book: [
      {
        title: "Book Of My Mission",
        author: "My Life",
        year: 2001,
      },
      {
        title: "It is What it is ",
        author: "Something...",
        year: 2000,
      },
      {
        title: "You Can't See Me",
        author: "bro",
        year: 1996,
      },
      {
        title: "Temp",
        author: "Tempo",
        year: 67428,
      },
    ],

    getTitleAndYear: function () {
      return this.book.map((book) => {
        return `The Title of the book is ${book.title} & the year is ${book.year}`;
      });
    },
  };

  console.log("This Library is");
  console.log(library);

  const name = library.name;

  const bookTitles = library.book.map((book) => {
    return book.title;
  });

  console.log(
    `This name of the library is ${name} && the book title are [${bookTitles}] `
  );

  library.getTitleAndYear();
}

library();

function itration() {
  const library = {
    name: "My Library",
    book: [
      {
        title: "Book Of My Mission",
        author: "My Life",
        year: 2001,
      },
      {
        title: "It is What it is ",
        author: "Something...",
        year: 2000,
      },
      {
        title: "You Can't See Me",
        author: "bro",
        year: 1996,
      },
      {
        title: "Temp",
        author: "Tempo",
        year: 67428,
      },
    ],

    getTitleAndYear: function () {
      return this.book.map((book) => {
        return `The Title of the book is ${book.title} & the year is ${book.year}`;
      });
    },
  };

  library.book.forEach((book, index) => {
    for (const key in book) {
      if (book.hasOwnProperty(key)) {
        console.log(`  ${key}: ${book[key]}`);
      }
    }
  });

  console.log("Values ");
  library.book.forEach((book, index) => {
    console.log("Keys:");
    Object.keys(book).forEach((key) => {
      console.log(`  ${key}`);
    });

    console.log("Values:");
    Object.values(book).forEach((value) => {
      console.log(`  ${value}`);
    });
  });
}

itration();
