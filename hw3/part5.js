// JavaScript code for Homework 3

// Convert to Celsius using C = 5/9 * (F - 32)

function toCelsius(f) {
    var c;
    c = (5 / 9) * (f - 32);
    return Math.round(c * 10) / 10;
}

// Convert to Fahrenheit using F = (9/5 * C) + 32

function toFahrenheit(c) {
    var f;
    f = (9 / 5 * c) + 32;
    return Math.round(f * 10) / 10;
}

// Process form results

function CtoF() {
    var temp, result;
    temp = parseFloat(document.forms["myform"].elements["temp"].value);

    if (!isNaN(temp)) {
        result = temp + "°C = " + toFahrenheit(temp) + " °F";
    } else result = "Please input a numeric value.";
    document.forms["myform"].elements["result"].value = result;
}

// Process form results

function FtoC() {
    var temp, result;
    temp = parseFloat(document.forms["myform"].elements["temp"].value);

    if (!isNaN(temp)) {
        result = temp + "°F = " + toCelsius(temp) + " °C\n";
    } else result = "Please input a numeric value.";
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