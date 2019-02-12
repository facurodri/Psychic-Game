// global variables for game
var compRandom;   //gets random computer letter
var computerWins = 0;   // collects computer wins    
var guestWins = 0;      // collects players wins
var guessesLeft = 9;    // guesses left per turn 
// create array for letters
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// created a variable for computer to hold random letter.

function aZ() {
    compRandom = (alphabet[Math.floor(Math.random() * alphabet.length)]);
    console.log(compRandom);
}
//Opens page and automatically calls random letter and stores it.
aZ();

// created function to reset game/ varibles 
function gameReset() {
    aZ(); //calls my reset computer letter
    guessesLeft = 9;    //resets turns left
    $("#guesses-remain")[0].textContent= guessesLeft;   //displays values of guesses remaing 
    $("#player-input")[0].textContent= "";     // displays value of missed letters
}
//this line creates listner function (checkKeyPress) everytime a keyup event happens. "Keyup" is my parameter
document.addEventListener("keyup", checkKeyPress, false);
// function validates to make sure they typed A-Z key otherwise it alerts its not valid key
function checkKeyPress(stroke) {
    if (stroke.keyCode >= "65" && stroke.keyCode <= "90") {
        checkLetter(stroke.key);
        } else {
        alert("That is not a letter! Try again using A-Z");
    }
}
//This function is the game. It checks for players input to see if it matches computer's random choice.
//If it matches, player gets a win and game gets reset.
//If player misses, Missed letter gets stored & loops till there are no more turns left in the round.
//If game reaches 0. it ends turn and gives computer a point and resets game.
//Computer picks new letter 
function checkLetter (letter){
    if ( letter === compRandom ){
        guestWins ++;
        $("#WinsT")[0].textContent= guestWins;
        gameReset();   
    } else { 
        guessesLeft --; 
        $("#guesses-remain")[0].textContent= guessesLeft;
        $("#player-input").append(letter + " "); 
        if(guessesLeft === 0){
            computerWins ++;
            $("#LosesT")[0].textContent= computerWins;
            gameReset();
        } 
    }   
}
