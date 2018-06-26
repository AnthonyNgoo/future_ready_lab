/*eslint-env browser*/
function playGame() {
alert("First enter a low number, then a high number. Then, guess a random number between them.");

//get the low and high bounds 
//uses parseInt() to make sure we have numbers not strings
var from = parseInt(prompt("Enter the lower bound."));

var to = parseInt(prompt("Enter the higher bound."));

//Limits the number that can be entered into the bounds.1
while (from < 0){
    from = parseInt(prompt("Enter a number greater than 0"));
//continue
} while (to > 1000){
    to = parseInt(prompt("Enter a number less than 1000"))
}

//get an integer between [from, to]
//Math.random() return decimals, used Math.round() to get whole number
var target = Math.round(Math.random() * (to - from) + from);

var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));

var totalGuesses =1;

//loop until user guesses correct number
//loop until user stops trolling
while(currentGuess != target || currentGuess > 1000){
    if (currentGuess < target){
        currentGuess = parseInt(prompt("Enter a higher number that is more than the lower bound"));
        totalGuesses++;
        
    }else if (currentGuess > target || currentGuess < 0){
        currentGuess = parseInt(prompt("Enter a lower number that is less than the higher bound"));
        totalGuesses++
    }
}
    alert("It took " +totalGuesses + " tries to guess the correct number.");
}