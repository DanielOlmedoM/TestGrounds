/* # Countdown

In this activity you will be writing code to create a function that prints all whole numbers from `num` to a given number.

## Instructions

- Open [Unsolved/log-nums.js](Unsolved/log-nums.js) in your code editor&mdash;this is the only file you will modify in this activity.

  - In this file you will be writing code in the body of the `countdown` function to achieve the following:

    - Print all numbers from the given `num` argument to `1`, inclusive.

      - For example, given the number `10` as the `num` argument, the following should be printed to the console, one log at a time:

        ```bash
        10
        9
        8
        7
        6
        5
        4
        3
        2
        1
        ```*/

    // Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function(num) {

  for (var i = num; i >= 0; i--) {
    console.log(i);
  }

};