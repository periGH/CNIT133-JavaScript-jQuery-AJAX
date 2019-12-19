// Javascript Functions for Homework 4 Part 2

// This function returns true if n is a number greater than 0.

function isValid(n) {
    if (isNaN(n) || (n < 0)) return false;
    else return true;
}

// This function calculates an employee's gross pay and returns the result.

function grossPay(hours, rate, name = "Employee") {
    var result = "";

    if (isValid(hours) && isValid(rate)) {
        var gross = hours * rate;

        if (hours > 40) {
            gross += (hours - 40) * rate * .5;
        }
        result = name + " earned " + gross.toLocaleString('en', {
            style: 'currency',
            currency: 'USD'
        }) + "\n";
    } else result = "Invalid or missing entries for " + name + "\n";

    return result;
}

function process() {
    var result = "";

    var hours1 = parseFloat(document.forms["myform"].elements["hours1"].value);
    var rate1 = parseFloat(document.forms["myform"].elements["rate1"].value);

    var hours2 = parseFloat(document.forms["myform"].elements["hours2"].value);
    var rate2 = parseFloat(document.forms["myform"].elements["rate2"].value);

    var hours3 = parseFloat(document.forms["myform"].elements["hours3"].value);
    var rate3 = parseFloat(document.forms["myform"].elements["rate3"].value);

    var hours4 = parseFloat(document.forms["myform"].elements["hours4"].value);
    var rate4 = parseFloat(document.forms["myform"].elements["rate4"].value);

    var hours5 = parseFloat(document.forms["myform"].elements["hours5"].value);
    var rate5 = parseFloat(document.forms["myform"].elements["rate5"].value);

    var hours6 = parseFloat(document.forms["myform"].elements["hours6"].value);
    var rate6 = parseFloat(document.forms["myform"].elements["rate6"].value);

    result += grossPay(hours1, rate1, "Employee 1");
    result += grossPay(hours2, rate2, "Employee 2");
    result += grossPay(hours3, rate3, "Employee 3");
    result += grossPay(hours4, rate4, "Employee 4");
    result += grossPay(hours5, rate5, "Employee 5");
    result += grossPay(hours6, rate6, "Employee 6");

    document.forms["myform"].elements["result"].value = result;
}