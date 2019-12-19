// Homework 8 Part 4

function completeForm(str) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && str.length == 2) {

      var response = this.responseText.split(", ");
      var name = response[0];
      var cap = response[1];
      var pop = response[2];

      document.forms["myform"].elements["name"].value = name;
      document.forms["myform"].elements["cap"].value = cap;
      document.forms["myform"].elements["pop"].value = pop;
    }
  };
  xmlhttp.open("GET", "part4.php?stcode=" + str.toUpperCase(), true);
  xmlhttp.send();
}