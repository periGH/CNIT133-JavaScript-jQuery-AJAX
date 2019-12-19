// Javascript Functions for Homework 6 Part 1


// This function checks for valid input and returns either true or false

function isValid(n) {
  if (isNaN(n) || (n < 1)) return false;
  else return true;
}


// Process form results

// a) round the floating-point number to the nearest integer
// b) calculate the square root of the floating-point number and round it to an integer
// c) round the floating-point number to the nearest tenths position
// d) round the floating-point number to the nearest hundredths position
// e) round the floating-point number to the nearest thousandths position

function process() {
  var f, result;
  f = parseFloat(document.forms["myform"].elements["floatingpoint"].value);

  if (!isValid(f)) {
    result = "Entry is not valid.";
  }

  else {
    var a = Math.round(f);
    var b = Math.round(Math.sqrt(f));
    var c = Math.floor(f * 10 + .5) / 10;
    var d = Math.floor(f * 100 + .5) / 100;
    var e = Math.floor(f * 1000 + .5) / 1000;

    result = "Original number: " + f;
    result += "\nRounded to nearest integer: " + a;
    result += "\nSquare root rounded to nearest integer: " + b;
    result += "\nRounded to tenths: " + c.toFixed(1)
    result += "\nRounded to hundredths: "+ d.toFixed(2)
    result += "\nRounded to thousandths: " + e.toFixed(3)
  }

  document.forms["myform"].elements["result"].value = result;
}
