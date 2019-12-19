// JavaScript code for Homework 3 Extra Credit

// Global variables

var firstRoll = 0; // a value of 0 indicates a new game

// A function which returns an integer from 1 to 6 representing a random die roll

function rollDie() {
    return Math.round(Math.random() * 5) + 1;
}

// A function which returns an image of a die

function dieImage(die) {
    return '<img src="images/dice/red/' + die + '.svg" width="120" alt="' + die + '">';
}

// The main function which simulates a roll of dice in a game of craps.

function rollDiceButton() {
    var message = "";
    var die1 = rollDie();
    var die2 = rollDie();
    var diceRoll = die1 + die2;
    var youRolled = "YOU ROLLED: " + diceRoll + "\n";
    var gameOver = false;

    // show the dice
    document.getElementById('dice').innerHTML = dieImage(die1) + "&nbsp;&nbsp;" + dieImage(die2);

    if (firstRoll != 0) {
        message = "YOUR POINT: " + firstRoll + "\n" + youRolled;
        switch (diceRoll) {
            case firstRoll:
                message += "YOU MADE YOUR POINT!  YOU WON!";
                gameOver = true;
                break;
            case 7:
                message += "HOUSE WON!  YOU LOST!";
                gameOver = true;
                break;
            default:
                message += "ROLL AGAIN";
        }
    } else {
        firstRoll = diceRoll;
        message = "NEW GAME\n" + youRolled;
        switch (firstRoll) {
            case 7:
            case 11:
                message += "GAME OVER!  YOU WON!";
                gameOver = true;
                break;
            case 2:
            case 3:
            case 12:
                message += "CRAPS!  YOU LOST!";
                gameOver = true;
                break;
            default:
                message += "YOUR POINT IS " + firstRoll;
        }
    }

    if (gameOver) {
        message += "\nROLL THE DICE TO PLAY AGAIN";
        firstRoll = 0;
    }
    document.forms["myform"].elements["gametable"].value = message;
}

// A jQuery function which shows or hides instructions

$(document).ready(function() {
    $("#instructions").hide();
    $("#show").click(function() {
        $("#instructions").show(800);
    });
    $("#hide").click(function() {
        $("#instructions").hide(800);
    });
});