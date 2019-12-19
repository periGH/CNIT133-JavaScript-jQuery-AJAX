
function validateForm() {
  var name = document.forms["myform"].elements["name"].value;
  var educ = document.forms["myform"].elements["educ"].value;
  var os = document.forms["myform"].elements["os"].value;
  var msg = "";

  if (name == "") msg += "Name is missing.\n";

  if (educ == "") msg += "Education is missing.\n";

  if ( (!document.forms["myform"].elements["lang0"].checked) &&
       (!document.forms["myform"].elements["lang1"].checked) &&
       (!document.forms["myform"].elements["lang2"].checked) &&
       (!document.forms["myform"].elements["lang3"].checked) ) msg += "Language is missing.\n";

  if (os == "") msg += "OS is missing.\n";

  if (msg == "") msg = "Success!";
  
  alert(msg);
}
