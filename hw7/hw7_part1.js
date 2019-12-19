

function process() {
  var color = document.forms["myform"].elements["color"].value;
  var fontsize = document.forms["myform"].elements["fontsize"].value;

  var fontstyle = document.forms["myform"].elements["fontstyle"].value;
  var fontfamily = document.forms["myform"].elements["fontfamily"].value;
  var fontweight = document.forms["myform"].elements["fontweight"].value;

  document.body.style.backgroundColor = color;
  document.body.style.fontSize = fontsize;
  document.body.style.fontStyle = fontstyle;
  document.body.style.fontFamily = fontfamily;
  document.body.style.fontWeight = fontweight;


}