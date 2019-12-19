// JavaScript code for Homework 3 Part 6

// global variables

var result = 0;
var question = "";
var solution = "";

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

// Generate a random multiplication question.  Can be modified to allow other math questions.

function generateQuestion() {
    //  var result, question, solution;
    var operators = ["plus", "minus", "times", "divided by"];
    var symbols = ["+", "-", "*", "/"];

    var n1 = Math.round(Math.random() * 9);
    //  var op = Math.round(Math.random() * 2);
    var op = 2;
    var n2 = Math.round(Math.random() * 9);

    switch (op) {
        case 0:
            result = n1 + n2;
            break;
        case 1:
            result = n1 - n2;
            break;
        default:
            result = n1 * n2;
    }
    solution = n1 + " " + symbols[op] + " " + n2 + " = " + result + "\n";
    question = "How much is " + n1 + " " + operators[op] + " " + n2 + "?";
}

// A function which processes the form input

function mathGame() {
    var message = "";
    var response = parseInt(document.forms["myform"].elements["response"].value);

    if (question === "") {
        generateQuestion();
        message = question;
    } else {
        if (response == result) {
            message = "Very good!\n" + solution + "Press Submit to continue.";
            question = "";
        } else {
            message = "No. Please try again.\n" + question;
        }
    }
    document.forms["myform"].elements["response"].value = "";
    document.forms["myform"].elements["infobox"].value = message;
}