Object Oriented Programming

DRY: Don't repeat yourself.

Object: Objects in JavaScript are unordered collections of related data built on a key-value structure in which values can be any data type, including functions.

Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects, which are instances of classes. 
Class: A blueprint or template that defines the properties and behaviors common to all objects of a certain type.
Object: An instance of a class, representing a specific entity with its own state and behavior.
Encapsulation: The bundling of data (attributes) and methods (functions) that operate on the data into a single unit (class). 
Inheritance: Allows a new class (subclass or derived class) to inherit properties and behaviors from an existing class (superclass or base class).
Polymorphism: Polymorphism allows methods to be defined in a general way for a base class and then overridden in derived classes.
Abstraction: Simplifying complex systems by modeling classes based on their essential properties and behaviors, while ignoring irrelevant details.

Object creation:
object literals (defines and creates in a single statement): const car = { name: 'honda', model: 'civic', year: 2008, color: 'black' };
using the "new" keyword: const Honda = new Car()
Using constructors (blueprint): class Car {
                                            constructor(name, model, year, color) {
                                            this.name = name;
                                            this.model = model;
                                            this.year = year;
                                            this.color = color;
                                            }}

10-01 (Constructors):
// Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
            function Animal(raining, noise) {
            this.raining = raining;
            this.noise = noise;
            this.makeNoise = () => {
                if (this.raining === true) {
                console.log(this.noise);
                }
            };
            }

const dogs = new Animal(true, 'Woof!');

10-03 (Prototypes):
The prototype property is often used when creating objects through constructor functions or classes. When you create an object using a constructor function or a class, the newly created object inherits properties and methods from its constructor function's or class's prototype.

function Person(name) {
  this.name = name;
}

// Adding a method to the prototype of Person
Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

// Creating an object using the Person constructor
var person1 = new Person("John");

// Accessing the method from the prototype
person1.sayHello(); // Output: Hello, my name is John

10-05 (Polymorphism):
In JavaScript, polymorphism is a concept that allows objects of different types to be treated as objects of a common type. 
The extends keyword is used in the context of class declarations to create a subclass (child class) that inherits from another class (parent class).

class Parent {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}

class Child extends Parent {
  constructor(name, toy) {
    super(name); // Call the constructor of the parent class
    this.toy = toy;
  }}

10-07 (Promises):
In JavaScript, a Promise is an object representing the eventual completion or failure of an asynchronous operation. 
A Promise is in one of three states:
1- Pending: The initial state. The promise is neither fulfilled nor rejected.
2- Fulfilled: The operation completed successfully, and the promise has a resulting value.
3- Rejected: The operation failed, and the promise has a reason for the failure.

// Promise
    const willGetSwitch = new Promise((resolve, reject) => {
    // Check for a desireable outcome, if so resolve the promise
    if (choresDone) {
        const reward = {
        name: 'Nintendo Switch',
        desired: true,
        };
        resolve(reward);

        // Otherwise reject the promise
    } else {
        const issue = new Error('Child did not finish chores as promised');
        reject(issue);
    }
    });

10-09 (Promise-All):
Promise.all is a method in JavaScript that takes an array of promises and returns a new promise that is fulfilled with an array of the resolved values of the input promises, in the same order as the original array. 

10-11 (TDD):
TDD, or Test-Driven Development, is a software development approach where tests are written before the actual code that needs to be implemented. The TDD process typically follows a cycle known as the "Red-Green-Refactor" cycle:
1- Red: Write a Failing Test.
2- Green: Write the Minimum Code to Pass the Test.
3- Refactor: Improve the Code Without Changing Its Behavior.
4- Repeat: Continue the Cycle. 

10-13 (Pass-tests):

10-15 (Organizing-tests):

10-17 (Introduce-mocks):
Axios is a popular JavaScript library for making HTTP requests in browsers and Node.js environments. 
Here's a basic example of using Axios to make a simple HTTP GET request in a browser environment:
// Include Axios in your project
// For example, using npm: npm install axios
// Then, import Axios in your JavaScript file
const axios = require('axios');

// Make a GET request
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

Here's an example of making a POST request:
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1
})
  .then(response => {
    console.log('Post created:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

10-21 (Classes):
Classes provide a way to create objects using a blueprint or template. 
        class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
        }

        drive() {
            console.log(`The ${this.make} ${this.model} is driving.`);
        }}
    
10-23 (Subclasses):
In JavaScript, subclasses are classes that inherit properties and methods from another class, referred to as the superclass or parent class, using the 'extends' keyword.

10-25 (Multiple classes):
Use .map()

10-28 (Mini project: CLI-word guessing game)