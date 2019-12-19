// Javascript Functions for Homework 4 Extra Credit



function isValid(n) {
  if (isNaN(n) || (n < 2) || (n > 10)) return false;
  else return true;
}



// Drawing Square

function drawSquare(size) {
  var side = "";

  if (size < 2) size = 2;
  if (size > 10) size = 10;

  for (x = 0; x < size; x++) side += "* ";

  var square = "<pre>" + side + "\n";

  for (y = 2; y < size; y++) {
    square += "* ";
    for (x = 2; x < size; x++) {
      square += "  ";
    }
    square += "*\n";
  }
  square += side + "</pre>";
  document.getElementById("square").innerHTML =  square;
}



function process() {
  var size = parseInt(document.forms["myform"].elements["size"].value);
  if (isValid(size)) {
    drawSquare(size)
  } else {
    document.getElementById("square").innerHTML = "SIZE NOT VALID";
  }
    
}



