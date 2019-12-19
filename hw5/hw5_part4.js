

var a, numberString, count;
init();


function process() {
    // Get the input from the text input box.
    var input = parseInt(document.getElementById("num").value, 10);

    // input is not valid, display an alert.
    if (input < 10 || input > 100 || isNaN(input)) {
        alert("Invalid number.  Please try again.");
        setFocus();
        return false;
    }

    // Determine whether the number is already in the array.
    var found = false;
    for (var i = 0; i < a.length; i++) {
        if (a[i] == input) {
            // The number is already in the array
            found = true;
            break;
        }
    }

    // If the number was not found, push it onto the array, and append it to the output string.
    if (!found) {
        a.push(input);
        if (numberString == "") numberString = input;
        else numberString += ", " + input;
    }

    // Display message in text area.
    count++;
    document.getElementById("msg").value = count + " item(s) entered.\n" + numberString;
    setFocus();
    return false;
}



function init() {
    a = [];
    numberString = "";
    count = 0;
    return true;
}


function setFocus() {
    document.getElementById("num").select();
    document.getElementById("num").focus();
}
