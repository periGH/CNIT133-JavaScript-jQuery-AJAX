
// This function checks for valid input and returns either true or false

function isValid(n) {
    if (isNaN(n) || (n < 0) || (n > 100)) return false;
    else return true;
}

// This function calculates and returns the final average

function finalAverage(hwAvg, midExam, finalExam, ACR) {
    return Math.round((hwAvg / 2) + (midExam / 5) + (finalExam / 5) + (ACR / 10));
}

// This function calculates and returns the final grade

function finalGrade(finalAvg) {
    var grade;

    switch (Math.floor(finalAvg / 10)) {
        case 10:
        case 9:
            grade = "A";
            break;
        case 8:
            grade = "B";
            break;
        case 7:
            grade = "C";
            break;
        case 6:
            grade = "D";
            break;
        default:
            grade = "F";
    }
    return (grade);
}

// This function gets the users grades and then displays the final average

function process() {
    var hwAvg, midExam, finalExam, ACR, finalAvg, myGrade, result;

    hwAvg = parseInt(document.forms["myform"].elements["hwAvg"].value);
    midExam = parseInt(document.forms["myform"].elements["midExam"].value);
    finalExam = parseInt(document.forms["myform"].elements["finalExam"].value);
    ACR = parseInt(document.forms["myform"].elements["ACR"].value);

    if (isValid(hwAvg) && isValid(midExam) && isValid(finalExam) && isValid(ACR)) {
        finalAvg = finalAverage(hwAvg, midExam, finalExam, ACR);
        myGrade = finalGrade(finalAvg);
        result = "Final average is " + finalAvg + ".\nFinal grade is " + myGrade + ".";
        if (finalAvg < 70) {
            result += "\nStudent must retake this course.";
        }
    } else result = "All fields must be integers between 0 and 100.";
    document.forms["myform"].elements["result"].value = result;
}

// A jQuery function which shows or hides instructions

$(document).ready(function() {
    $("#instructions").hide();
    $("#show").click(function() {
        $("#instructions").show(800);
    });
    $("#hide").click(function() {
        $("#instructions").hide(800);
    });
});
