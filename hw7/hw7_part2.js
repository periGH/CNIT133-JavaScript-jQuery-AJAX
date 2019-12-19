// jQuery slideToggle to show login form.

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});


// Redirect to second page if password is valid.

function process() {
  var pass = document.forms["myform"].elements["password"].value;
  var result = "Password is incorrect.";

  if (pass == "obama") window.open("https://hills.ccsf.edu/~psahan/cnit133/hw7_part2a.html", "_self"); 
  else document.getElementById('result').innerHTML = result;
}
