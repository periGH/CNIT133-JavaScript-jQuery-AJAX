// JavaScript code for Homework 3

// This function checks for valid input and returns either true or false

function isValid(n) {
    if (isNaN(n) || (n < 10000) || (n > 99999)) return false;
    else return true;
}

// Returns true if a Palindrome

function isPalindrome(num) {
    var reversed = num.toString().split('').reverse().join('');

    if (num != reversed) {
        return false;
    } else return true;
}

// Process form results

function process() {
    var phrase, result;
    phrase = parseFloat(document.forms["myform"].elements["phrase"].value);

    if (isValid(phrase)) {
        result = "Entry is valid ";

        if (isPalindrome(phrase)) {
            result += "and is a palindrome.";
        } else result += "but is not a palindrome.";

    } else result = "Error.\nPlease enter a five-digit integer not starting with zero.";

    document.forms["myform"].elements["result"].value = result;
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

// jQuery tooltip

$(function() {
    $(document).tooltip();
});