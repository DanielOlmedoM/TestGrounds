/*# Log Even Nums

In this activity you will be writing code to create a function that prints even numbers from 0 to a given number.

## Instructions

- Open [Unsolved/log-even-nums.js](Unsolved/log-even-nums.js) in your code editor&mdash;this is the only file you will modify in this activity.

  - In this file you will be writing code in the body of the `logEvenNums` function to achieve the following:

    - Print all even numbers from `0` up to the given `nums` argument, inclusive.

      - For example, given the number `6` as the `num` argument, the following should be printed to the console, one log at a time:

        ```bash
        0
        2
        4
        6
        ```*/
    
// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function(num) {

  for (var i = 0; i<=num; i++) {
    if(i % 2 == 0) {
      console.log(i);
    }
  }
};