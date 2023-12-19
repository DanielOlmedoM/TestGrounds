//Rock, paper, scissors: Enter R, P, or S to signify my choice; computer to choose R, P, or S in return; option to play again whether I win or lose; see my total wins, ties, and losses after each round.
//Must use the `alert()`, `confirm()`, and `prompt()` methods to collect user input and display information to the user; The computer's selection must be random to ensure a fair game.

function game() {   
    start();
};

function start() {
   
    let startNew = window.confirm("Start game?");

if (startNew == true) {
    play()
} else {
    console.log("Bye")
}};

function play() {

    let wins = [];
    let loses = [];
    let ties = []; 

    console.log(wins);
    console.log(loses);
    console.log(ties);

  selection();

function selection() {

    let userChoice = window.prompt("Select: R,P,S");
    function getRandomInt(min, max) {
        min = Math.ceil(min); // Round up to the nearest integer
        max = Math.floor(max); // Round down to the nearest integer
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      let randomInteger = getRandomInt(1, 3);
      console.log("Rand. int " + randomInteger);

if(userChoice == "R" && randomInteger == 1) {
    console.log("You chose rock");    
    console.log("AI chose rock");
    ties.push(1);
} 

else if (userChoice == "R" && randomInteger == 2) {
    console.log("You chose rock");    
    console.log("AI chose paper");
    loses.push(1);
}

else if (userChoice == "R" && randomInteger == 3) {
    console.log("You chose rock");    
    console.log("AI chose scissors");
    wins.push(1);
}

else if(userChoice == "P" && randomInteger == 1) {
    console.log("You chose paper");    
    console.log("AI chose rock");
    wins.push(1);
} 

else if (userChoice == "P" && randomInteger == 2) {
    console.log("You chose paper");    
    console.log("AI chose paper");
    ties.push(1);
}

else if (userChoice == "P" && randomInteger == 3) {
    console.log("You chose paper");    
    console.log("AI chose scissors");
    loses.push(1);
}

else if(userChoice == "S" && randomInteger == 1) {
    console.log("You chose scissors");    
    console.log("AI chose rock");
    loses.push(1);
} 

else if (userChoice == "S" && randomInteger == 2) {
    console.log("You chose scissors");    
    console.log("AI chose paper");
    wins.push(1);
}

else if (userChoice == "S" && randomInteger == 3) {
    console.log("You chose scissors");    
    console.log("AI chose scissors");
    ties.push(1);
}

alert("Wins: " + wins.length + ", loses: " + loses.length + ", ties: " + ties.length);

let nextGame = window.confirm("Continue?");

if(nextGame == true) {
    selection()
}

else {
    alert("Final score: " + "Wins: " + wins.length + ", loses: " + loses.length + ", ties: " + ties.length);
}

}};

game();




