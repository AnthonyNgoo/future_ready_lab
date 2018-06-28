/*eslint-env browser*/
function playGame() {
alert("First enter a low number, then a high number. Then, guess a random number between them.");

//get the low and high bounds 
//uses parseInt() to make sure we have numbers not strings
var from = parseInt(prompt("Enter the lower bound."));
var to = parseInt(prompt("Enter the higher bound."));

//Limits the number that can be entered into the bounds
while (from < 0 || from > 1000 || isNaN(from)) {
        from = parseInt(prompt("Enter a NUMBER lower than 1000 and greater than 0"));
} while (to < 0 || to > 1000 || isNaN(to)) {
    to = parseInt(prompt("Enter a NUMBER lower than 1000 and greater than 0"));
}

//#2
while (to < from){
    to = alert("Enter a number higher than " + from);
    to = parseInt(prompt("Enter the higher bound."));
}

//get an integer between [from, to]
//Math.random() return decimals, used Math.round() to get whole number
var target = Math.round(Math.random() * (to - from) + from);

var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));

var totalGuesses = 1;

//loop until user guesses correct number
//loop until user stops inputing a number not between 1-1000
while(currentGuess > to) {
    currentGuess = parseInt(prompt("Enter a number that is lower than " + to));
    totalGuesses++;
} while (currentGuess < from) {
    currentGuess = parseInt(prompt("Enter a number that is higher than " + from));
    totalGuesses++;
} while (isNaN(currentGuess)) {
    currentGuess = parseInt(prompt("Guess a number"));
    totalGuesses++;
} while (currentGuess != target) {
    if (currentGuess < target){
        currentGuess = parseInt(prompt("Your guess is too low"));
        totalGuesses++;
    } else if (currentGuess > target){
        currentGuess = parseInt(prompt("Your guess is too high"));
        totalGuesses++;
    }
}

alert("It took " + totalGuesses + " tries to guess the correct number.");
    
}