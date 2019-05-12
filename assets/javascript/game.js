//First start with arrays and variables

//Create array with all choices; basically, the alphabet
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//create default variables

var win = 0;
var loss = 0;
var guessesLeft = 10;
var guessesSoFar = [];


//reset to default and start new game

function reset (){
    guessesLeft = 10;
    
    guessesSoFar = [];
    computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    console.log (computerGuess);

}
reset();

//When the player/user wins: issue a new letter when userGuess is the same as computerGuess. How? review this. it's the same thing

function newword (){
    guessesSoFar = [];
    guessesLeft = 10;
    computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];

    console.log (computerGuess);
}



//when the player/user presses a key, it records the 'letter' and saves 'letter' to userGuess. 
// convert the typed 'letter' and lc;
// convert Unicode values into characters.
document.onkeyup = function(event) {
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

if (!/[a-z]/.test(userGuess)){
    alert ("You can choose only letters.");
    guessesLeft++;
    loss--;
}

//if a letter is not typed yet, then log it in the guessesSoFar array
// if the player already typed a letter then alert player to choose another letter. 

if (guessesSoFar.indexOf(userGuess) === -1){
    guessesSoFar.push(userGuess);
    }

else {
    alert ("This letter was already used. Madam Ruby says choose another.");
    guessesLeft++;
    loss--;
    
    
}
    // computerChoice.indexOf(userGuess) >=0){
    //guessesSoFar[guessesSoFar.length]= userGuess;
    // guessesSoFar.push(userGuess);


    //if userGuess is the same as computerGuess, then record win (#)
    if (userGuess === computerGuess) {
        win++;
        alert ("Your guess is correct. You have the Gift. Try a new letter");
        newword();
    }

    //if userGuess is not the same with computerGuess, then record loss (#)
    else {
        loss++;

    //if userGuess isn't the same as computerGuess then guessesLeft decreases 
        guessesLeft -- ;
    }

    //if guessLeft is 0 then the game reset to the default and start a new game
    if (guessesLeft === 0) {
        
        alert ("Madam Ruby says: you lose")
        reset();
    }

    document.querySelector('#win').innerHTML = "Win: " + win;
    document.querySelector('#loss').innerHTML = "Loss: " +loss;
    document.querySelector('#guessleft').innerHTML = "Number of guesses left: " + guessesLeft;
    document.querySelector('#guessofar').innerHTML = " Your guesses so far: " + guessesSoFar;


};
