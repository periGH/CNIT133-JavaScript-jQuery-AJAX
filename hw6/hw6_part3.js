// Javascript Functions for Homework 6 Part 3


// Time and date stuff for Part 1

function printDate() {

  var d = new Date();
  var offset = d.getTimezoneOffset()/60;

  document.write("<pre>1. Current Date<br>");
  document.write("<br><strong>toString:</strong> \t" + d.toString());
  document.write("<br><strong>toLocaleString:</strong>\t" + d.toLocaleString());
  document.write("<br><strong>toUTCString:</strong> \t" + d.toUTCString());
  document.write("<br>");
  document.write("<br><strong>hours difference between PST or PDT and UTC:</strong> \t" + offset);
  document.write("<br><strong>hours difference between EST or EDT and UTC:</strong> \t" + (offset - 3));
  document.write("</pre>");
}




// Process the phone number

function process() {
  var phoneNum = document.forms["myform"].elements["phone_us"].value;
  var digits = phoneNum.split();
  var areacode = phoneNum.substring(1,4);
  var prefix = phoneNum.substring(6,9);
  var line = phoneNum.substring(10,14);
  var result = "Area code: " + areacode + "\nPrefix: " + prefix + "\nLine number: " + line;

  document.forms["myform"].elements["area"].value = areacode;
  document.forms["myform"].elements["phone"].value = prefix + "-" + line;
  document.forms["myform"].elements["result"].value = result;
}

