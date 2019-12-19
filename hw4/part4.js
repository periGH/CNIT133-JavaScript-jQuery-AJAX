// Javascript Functions for Homework 4 Part 4

// This function returns true if n is a number equal to or greater than 0.

function isValid(n) {
    if (isNaN(n) || (n < 0)) return false;
    else return true;
}

// This function parses the form inputs and outputs the results.

function process() {
    var prices = [2.98, 4.50, 9.98, 4.49, 6.87];
    //  var qty = new Array(5);
    //  var amt = new Array(5);
    var qty = [0, 0, 0, 0, 0];
    var amt = [0, 0, 0, 0, 0];
    var ts = 0;
    var errorMsg = "";

    qty[0] = parseInt(document.forms["myform"].elements["qty1"].value);
    qty[1] = parseInt(document.forms["myform"].elements["qty2"].value);
    qty[2] = parseInt(document.forms["myform"].elements["qty3"].value);
    qty[3] = parseInt(document.forms["myform"].elements["qty4"].value);
    qty[4] = parseInt(document.forms["myform"].elements["qty5"].value);

    for (i = 0; i < 5; i++) {
        if (isValid(qty[i])) {
            amt[i] = (qty[i] * prices[i]);
            ts += amt[i];
        } else {
            errorMsg += "Row " + (i + 1) + " Quantity is invalid or missing.<br>";
        }
    }

    document.forms["myform"].elements["a1"].value = amt[0].toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    });
    document.forms["myform"].elements["a2"].value = amt[1].toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    });
    document.forms["myform"].elements["a3"].value = amt[2].toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    });
    document.forms["myform"].elements["a4"].value = amt[3].toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    });
    document.forms["myform"].elements["a5"].value = amt[4].toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    });

    document.forms["myform"].elements["ts"].value = ts.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    });

    document.getElementById("errorMsg").innerHTML = errorMsg;
}