

// console.log("start game")
alert("CLICK OK TO START THE GAME!")

let numbers =
["1","2","3","4","5","6","7","8","9"];
let wins = 0;
let losses = 0;
let guessesLeft = 5;
let guessedNumbers = [];

let randomNumber = Math.floor(Math.random() * numbers.length);
let computerChoice = numbers[randomNumber];

console.log(computerChoice);

let newGame = function() {
	guessesLeft = 5;
    guessedNumbers = [];
	let randomNumber = Math.floor(Math.random() * numbers.length);
}

document.onkeyup = function(event) {


    let userGuess = event.key;
    // in case the user enter a number higher than 9 or a letter
    let regexp = /[1-9]/gi;
      if (!regexp.test(userGuess)) {
        alert("please enter a number ");
      }
      else {
        console.log(userGuess);
      }
     
      if (guessesLeft == 0) {
    	losses++;
    	document.getElementById("losses").innerHTML = losses;
        alert("YOU LOST!");
    }
    
        if (userGuess == computerChoice) {
        	wins++;
        	document.getElementById("wins").innerHTML = wins;
            alert("YOU WON!");
            newGame();
      } else {
        console.log("Guess again!");
        document.getElementById("guessesLeft").innerHTML = guessesLeft--;
        guessedNumbers.push(userGuess);
        document.getElementById("guessedNumbers").innerHTML = guessedNumbers;
      }
  }


