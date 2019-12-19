
var total = new Array(9);


// initializes the array.

function start() {
    for (var i = 0; i < total.length; ++i)
        total[i] = 0;
}



function addEntry() {
    var gross, commission, x;

    gross = parseInt(document.forms["myform"].elements["newEntry"].value);
    commission = (.09 * gross);
    x = Math.floor(commission / 100);

    if (gross < 0 || isNaN(gross)) {
        window.alert("invalid entry");

        document.forms["myform"].elements["newEntry"].value = " ";
        document.forms["myform"].elements["newEntry"].focus();

        return;

    } else {

        if (x > 8) ++total[8];
        else ++total[x];
    }

    outputArray();
}


// outputs the contents of the array and returns focus to newEntry.

function outputArray() {
    document.myform.totals.value =
        "Number of people who have these salaries:\n" +
        "$200.00 - 299.99 \t " + total[0] + "\n" +
        "$300.00 - 399.99 \t " + total[1] + "\n" +
        "$400.00 - 499.99 \t " + total[2] + "\n" +
        "$500.00 - 599.99 \t " + total[3] + "\n" +
        "$600.00 - 699.99 \t " + total[4] + "\n" +
        "$700.00 - 799.99 \t " + total[5] + "\n" +
        "$800.00 - 899.99 \t " + total[6] + "\n" +
        "$900.00 - 999.99 \t " + total[7] + "\n" +
        "$1000 and over \t " + total[8];

    document.forms["myform"].elements["newEntry"].value = " ";
    document.forms["myform"].elements["newEntry"].focus();
}


// reset the form 
function res() {
    document.forms["myform"].elements["newEntry"].focus();
    start();
}
