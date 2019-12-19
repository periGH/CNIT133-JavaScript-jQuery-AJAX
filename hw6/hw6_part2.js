// Javascript Functions for Homework 6 Part 2


function occurrences(char, text) {
  var count = 0;

  for (i = 0; i < text.length; i++) { 
    if (text.charAt(i) == char) count ++;
  }

  return count;
}


function process() {
  var text = document.forms["myform"].elements["userText"].value;
  var char = document.forms["myform"].elements["searchChar"].value;
  var n = occurrences(char, text);
  var result = n + " occurrences of " + char + " found in the text.";

  if (n < 1) {
    var myWindow = window.open("", "MsgWindow", "width=300,height=100");
    myWindow.document.write("<p>Search character '" + char + "' not found in text string!</p>");
  }

  document.forms["myform"].elements["result"].value = result;
}