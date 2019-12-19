// JavaScript code for Homework 3 Part 2

// This function checks for valid input and returns either true or false

function isValid(n) {
    if (isNaN(n) || (n < 0)) return false;
    else return true;
}

// This function calculates a salesperson's earnings

function grossSales(item1, item2, item3, item4) {
    var gross = (item1 * 239.99) + (item2 * 129.75) + (item3 * 99.95) + (item4 * 350.89);
    return gross;
}

// This function gets the users grades and then displays the final average

function process() {
    var name, item1, item2, item3, item4, gross, sales, earnings;
    var result = "";

    name = (document.forms["myform"].elements["name"].value);
    item1 = parseInt(document.forms["myform"].elements["item1"].value);
    item2 = parseInt(document.forms["myform"].elements["item2"].value);
    item3 = parseInt(document.forms["myform"].elements["item3"].value);
    item4 = parseInt(document.forms["myform"].elements["item4"].value);

    if (isValid(item1) && isValid(item2) && isValid(item3) && isValid(item4)) {
        gross = grossSales(item1, item2, item3, item4);
        sales = gross.toLocaleString('en', {
            style: 'currency',
            currency: 'USD'
        });
        earnings = (200 + (.09 * gross)).toLocaleString('en', {
            style: 'currency',
            currency: 'USD'
        });

        if (name == "") result = "Name is missing.";
        else result = "Sales report for " + name;
        result += "\nTotal amount sold: " + sales + "\nTotal earnings: " + earnings;
    } else {
        if (name == "") result = "Name is missing.\n";
        result += "All item fields must be positive integers.";
    }
    document.forms["myform"].elements["result"].value = result;
}

// jQuery tooltip

$(function() {
    $(document).tooltip();
});

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