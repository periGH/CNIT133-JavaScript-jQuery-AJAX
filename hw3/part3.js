// JavaScript code for Homework 3 Part 3

// This function checks for valid input and returns either true or false

function isValid(n) {
    if (isNaN(n) || (n < 0)) return false;
    else return true;
}

// This function gets the users grades and then displays the final average

function process() {
    var acct, bal, charges, credApplied, credLimit, newBal, result;

    acct = document.forms["myform"].elements["acct"].value;
    bal = parseFloat(document.forms["myform"].elements["bal"].value);
    charges = parseFloat(document.forms["myform"].elements["charges"].value);
    credApplied = parseFloat(document.forms["myform"].elements["credApplied"].value);
    credLimit = parseFloat(document.forms["myform"].elements["credLimit"].value);

    if (isValid(bal) && isValid(charges) && isValid(credApplied) && isValid(credLimit)) {
        newBal = (bal + charges) - credApplied;
        if (acct)
            result = "Statement for Account #" + acct + "\n";
        else
            result = "Error: Missing Account Number\n";
        result += "New balance is " + newBal.toLocaleString('en', {
            style: 'currency',
            currency: 'USD'
        }) + ".\n";
        if (newBal > credLimit) {
            result += "Credit Limit exceeded by " + (newBal - credLimit).toLocaleString('en', {
                style: 'currency',
                currency: 'USD'
            }) + ".";
        } else result += "Credit Available is " + (credLimit - newBal).toLocaleString('en', {
            style: 'currency',
            currency: 'USD'
        }) + ".";
    } else {
        result = "Error: ";
        if (!acct)
            result += "Missing Account Number\n";
        result += "Invalid or Missing Entries";
    }
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

// A function which uses jQuery to change the style of the textbox

function changeDisplay() {
    $("textarea").css({
        "background-color": "black",
        "color": "white",
        "font-size": "large",
        "font-weight": "bold"
    });
}