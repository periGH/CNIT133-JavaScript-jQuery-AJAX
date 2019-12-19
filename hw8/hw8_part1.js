// Homework 8 Part 1

function showHint(str) {
    if (str.length == 0) { 
        document.getElementById("txtHint").innerHTML = "no suggestion";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "part1.php?q=" + str, true);
        xmlhttp.send();
    }
}