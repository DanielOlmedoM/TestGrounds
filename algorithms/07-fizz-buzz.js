/* # Fizz Buzz

In this activity, you will be writing code to create a function that solves the [Fizz Buzz](https://en.wikipedia.org/wiki/Fizz_buzz) problem.
## Instructions

  - In this file you will be writing code in the body of the `fizzBuzz` function to achieve the following:
    - Iterate through each number in the given array.
    - If a number is evenly divisible by 3, print "Fizz" to the console.
    - If a number is evenly divisible by 5 print "Buzz" to the console.
    - If a number is evenly divisible by 3 and 5, print "Fizz Buzz" to the console.
    - Else, print the number.
      - See the following array for an example:
        ```js
        var arr = [13, 14, 15, 16, 17, 18, 19, 20];
        ```
      - Given the preceding array, the following should be printed to the console:
        ```js
        13;
        14;
        ("Fizz Buzz");
        16
        17;
        ("Fizz");
        19;
        ("Buzz");
        ```
*/

  // Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      console.log('FIZZBUZZ')
    }

    else if (arr[i] % 5 == 0) {
      console.log('BUZZ')
    }

    else if (arr[i] % 3 == 0) {
      console.log("FIZZ")
    }

    else {
      console.log(arr[i])
    }
    
  }

};

fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])