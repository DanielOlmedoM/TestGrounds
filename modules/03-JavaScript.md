JavaScript

Front-end developers use JavaScript primarily to dynamically affect a webpage to enhance the user’s experience. No other programming language can run in the browser.

03-01 (Script consoleLog):
To call a script from the html use the <script src="script.js"> tag.
Console.log("Text to log in console")

03-03 (Hello variable):
Use "let" for declaring variables, "var" is function scoped. 
To call variables in a console log use "+" and the variable without quotes. 

03-05 (Primitive types):
Primitive data types are: undefined, string, number and boolean.
To check type of data use "typeof" followed by the name of the variable. 

03-07 (Logical comparison operators):
Arithmetic operators use numbers: +, -, /, *
Modulus returns the remainder between two numbers: %
Comparison operators return TRUE or FALSE
Equality "==", inequality "!="
Strict equality: "===", strict inequality "!=="
Greater than: ">", less than: "<"
Greater than or equal: ">=", less than or equal "<="
Logical opperators take in two or more expressions and return true or false.
Operators: AND "&&", OR "||", NOT "!"

03-09 (Conditional statements):
IF statement: if (condition) {function}
ELSE statement: if (condition) {function}
                else {function}
ELSE IF statement: allows to test more than one condition.
If(condition){function}
else if(condition){function}
else {function}

03-11 (Arrays):
Arrays are used to store groups of data in a single variable.
Eg. let names = ["Dan","Olm","Mog"]
The entire array can be accesed by using the array's name. Ie. Console.log(names)
To select a single element we use brackets for indexing: names[0]
Arrays are zero-indexed.
We can use index to replace data: names[3] = "New"
Length property returns how many elements are in the array: console.log(names.length)

03-13 (Iteration):
For loops are used to execute a code more than once (often used to iterate over arrays). 
for (var i = 0; i < 5; i++) {function}
To determine how many times the loop should exeture, we use the array's length. 
for (var i = 0; i < array.length; i++){function}

03-15 (Function):
Functions are reusable blocks of code that perform a specific task.
Function declaration:
function funcName() {
    console.log("Text")
    return;
}
Return stops the execution of a function.
Function expression:
let expressHello = function () {
    function
}
Functiones must be called to execute: expressHello()
Functions can take parameters: Parameters give a name to the data to be passed into the function. 
function declareHello(x,y,z) {
    console.log("text"+ x + y + z)
}
call it: declareHello("dan","27",true)

03-17 (Scope):
A variable declares in global scope is available to all functions.
A variable declared in a local scope (inside a function) is only available to that function.
Shadowing happes when the same variable is used in the local and global scope. 

03-19 (Methods):
In JavaScript, a method is a function that is associated with an object. In other words, a method is a property of an object that is a function. Methods are called on objects and can perform actions or provide information related to the object.
Examples: sort=sorts array, push=adds element to end of array, slice=Returns selected elements as new array (original array is unchanged).
String methods: Eg: replace = modifies string into a new one.

03-21 (Objects):
Objects are collections of properties, made uo of key-value pairs. 
var planet = {
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};
To access a property's value, use the object's name and the associated key using dot notation. Ie: console.log(planet.name) or bracket notation console.log(planet["name"]).

03-23 (Object methods):
Objects can store more than primitve data types, it can store arrays and methods. 
To access the value in an array, use the name of the object, the key and the index: console.log(planet.neighboringPlanets[0]);
To call a method, use the name of the object and the key: planet.tellFunFact();

03-25 (Object this):
The default keyword "this" refers to the global object (in a browser, the global object is the window).
When the keyword "this" is used inside of an object, "this" belongs to that object. 

03-28 (Mini-project: Rock, Paper, Scissors):