NodeJS

Full stack: Includes the suite of tools required to build both the front end and back ends of a web application.

Client-side: HTML, CSS and JavaScript, also client side APIs. A client is a piece of computer hardware or software that makes requests to a server.

Server: Depending on the context, a server is both the physical hardware and the software that hears requests from users and returns something, like an HTML or image file, or completes a process.

Client-server model: In modern web applications, there is constant back-and-forth communication between the visuals displayed on the user’s browser (the front end) and the data and logic stored on the server (the back end). Clients make requests, and servers respond.

NodeJS: Node.js is an open source, cross-platform JavaScript runtime environment designed to be run outside of the browser.
It is a general utility that can be used for a variety of purposes including asset compilation, scripting, monitoring, and most notably as the basis for web servers.

09-01(Node demo):
Open terminal
check node version: node -v
run script: node script.js

09-03 (Arrow-function):
// We can safely swap out function expressions with arrow functions most of the time
var createGreeting = (message, name) => {
  return message + ", " + name + "!";
};
// If the arrow function body contains only one expression, we can omit the curly braces and auto return it
var createGreeting = (message, name) => message + ", " + name + "!";

09-05 (Let-Const):
Const: 
// 1. const can be used for values which we will not reassign
// 2. const doesn't mean `constant value`, instead means `constant reference`
// 3. While we can MODIFY arrays and objects that are using `const`, we can't reassign them

Let:
// 1. When using var, our counter exists after a for-loop is done.
// When using let, our counter is not defined outside of the for-loop block
// 2. When using while loops, any values we create inside exist outside of the while-loop block
// 3. When using let, values defined inside of the while-loop block don't exist outside of it.
Basically let is limited to a smaller scope.

09-07 (Functional loops):
// forEach is a functional way of iterating through an array without a for-loop
  moviePatrons.forEach(patron => console.log(patron.age));

// Filter returns a new array containing only elements whose callback returns a truthy value
  const canWatchRatedR = moviePatrons.filter(function(patron) {
    return patron.age > 17;
  });

//In JavaScript, the .map() method is a higher-order function that is used to transform elements of an array. It creates a new array with the results of calling a provided function on each element of the original array. The original array remains unchanged.

09-09 (Template literals):
Template literals are enclosed by backticks ( ) instead of single or double quotes.
1- String Interpolation: You can embed expressions or variables directly within the string using ${} syntax. The expressions inside ${} are evaluated, and their results are inserted into the string.
    const name = 'John';
    const greeting = `Hello, ${name}!`;
    console.log(greeting); // Output: Hello, John!
2- Multiline Strings: Template literals make it easy to create multiline strings without the need for explicit newline characters. 
3- Expression Evaluation: Template literals allow the evaluation of JavaScript expressions within the ${} placeholders.
    const num1 = 5;
    const num2 = 10;
    const result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
    console.log(result); // Output: The sum of 5 and 10 is 15.

09-11(Process-argv):
In Node.js, process.argv is an array that contains command-line arguments passed to the Node.js process. The process object is a global object in Node.js that provides information about, and control over, the current Node.js process.

09-13(Read/write file):
// fs is a Node standard library package for reading and writing files
const fs = require('fs');
node myscript.js yourValue

09-15(Modularization):
// module.exports is an object we use to store variables or methods
module.exports = {
  pie,
  predictable,
};
Next file calls for the object/module and can access it's data:
const badmath = require('./badmath.js');
console.log(badmath.pie);

09-17 (npm):
Node Package Manager, is the default package manager for JavaScript runtime environment Node.js. It is a command-line tool that allows developers to easily install, share, and manage dependencies.
npm install package-name
2- Dependency Management: npm helps manage project dependencies by creating and maintaining a package.json file in the project directory. This file lists the project's dependencies and their versions.
run: npm init to create package.json

09-19 (Inquirer):
Inquirer is a Node.js library for creating command-line interfaces (CLIs) with a simple and intuitive way to interact with users.
1- Question Types: Inquirer supports various question types, such as text input, multiple-choice, confirmations, password input, and more.
2- Customization: Developers can customize the appearance of the prompt, add validation for user input, and provide default values.
3- Asynchronous Prompts: Inquirer is designed to work asynchronously, making it suitable for use in Node.js applications where non-blocking interactions are crucial.
4- Sequencing: Developers can use Inquirer to sequence and chain multiple prompts together, creating a series of questions for the user.
Error (Cannot use import statement outside a module):
Option 1: Rename to .mjs
Rename your file from promptExample.js to promptExample.mjs:

09-21 (for-of loop):
for (variable of iterable) {
  // code to be executed for each iteration
}

09-23 (rest-and-spread):
Rest and spread are two features in JavaScript that involve the use of three dots (...). They serve different purposes and are used in different contexts.
Rest: The rest syntax is used to collect the remaining elements of an iterable (like an array) into a single variable. 
Spread: The spread syntax, on the other hand, is used to expand elements of an iterable (like an array) into individual elements.

09-25 (Object destructuring):
Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign them to variables in a concise and readable way.
Syntax: const { property1, property2 } = object;
function exampleFunction({ property1, property2 }) {
  // Function logic using property1 and property2
}

09-28 (Mini project: CLI HTML generator)