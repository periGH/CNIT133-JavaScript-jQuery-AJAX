// Javascript Functions for Homework 6 Part 4


function occurrences(myChar, myText) {
  var myCount = 0;
  var i;
  myChar = myChar.toLowerCase();
  myText = myText.toLowerCase();

  for (i = 0; i < myText.length; i++) {
//    if (myText.indexOf(myChar, i) > -1) myCount ++;
    if (myText.charAt(i) == myChar) myCount ++;
  }

  return myCount;
}


function process() {
  var myText = document.forms["myform"].elements["userText"].value;
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var lettersFound = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var result = "# of each letter found\n";
  var myChar, n, i;

  for (i = 0; i < alphabet.length; i++) {

    myChar = alphabet.charAt(i);
    lettersFound[n] = occurrences(myChar, myText);
    result += (myChar + ":\t" + lettersFound[n] + "\n");
  }

  document.forms["myform"].elements["result"].value = result;
}
