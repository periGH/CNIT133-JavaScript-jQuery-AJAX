// Homework 8 Part 2

function completeForm() {
  var xmlhttp1 = new XMLHttpRequest();
  var xmlhttp2 = new XMLHttpRequest();
  var xmlhttp3 = new XMLHttpRequest();

  xmlhttp1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.forms["myform"].elements["time"].value = this.responseText;
    }
  };
  xmlhttp1.open("GET", "part2a.php", true);
  xmlhttp1.send();


  xmlhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.forms["myform"].elements["day"].value = this.responseText;
    }
  };
  xmlhttp2.open("GET", "part2b.php", true);
  xmlhttp2.send();


  xmlhttp3.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.forms["myform"].elements["date"].value = this.responseText;
    }
  };
  xmlhttp3.open("GET", "part2c.php", true);
  xmlhttp3.send();
}