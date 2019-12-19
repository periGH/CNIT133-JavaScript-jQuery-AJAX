// Javascript Functions for Homework 4 Part 1



// Part 1a:

function part1a() {
  var product = 1;
  var sum = 0;
  for (i = 5; i < 21; i += 3) { 
    product *= i;
    sum += i;
  }
  document.write("<strong>Part 1a:</strong><br>");
  document.write("5 * 8 * 11 * 14 * 17 * 20 = " + product.toLocaleString('en', {style: 'decimal', decimal: 'USD'}) + "<br>");
  document.write("5 + 8 + 11 + 14 + 17 + 20 = " + sum + "<br>");
}



// Part 1b:

function part1b() {
  var product = 1;
  var sum = 0;
  var i = 3;
  while (i < 32) {
    product *= i;
    sum += i;
    i += 4;
  }
  document.write("<strong>Part 1b:</strong><br>");
  document.write("3 * 7 * 11 * 15 * 19 * 23 * 27 * 31 = " + product.toLocaleString('en', {style: 'decimal', decimal: 'USD'}) + "<br>");
  document.write("3 + 7 + 11 + 15 + 19 + 23 + 27 + 31 = " + sum + "<br>");
}

