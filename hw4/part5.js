// Javascript Functions for Homework 4 Part 5




function process() {
//  var items = ["Apple", "Banana", "Orange"];
  var items = ["", "", ""];
  listFormat = ["Unordered List", "Ordered Number List", "Ordered Letter List"];
  listStart = ['<ul style="list-style-type: square;">', '<ol>', '<ol style="list-style-type: upper-alpha;">'];
  listEnd = ["</ul>", "</ol>", "</ol>"];
  var result = "";

  items[0] = document.forms["myform"].elements["item1"].value;
  items[1] = document.forms["myform"].elements["item2"].value;
  items[2] = document.forms["myform"].elements["item3"].value;

  var format = parseInt(document.forms["myform"].elements["format"].value);

  if (items[0] && items[1] && items[2]) {
    result = listStart[format] + "\n";

    for (i = 0; i < items.length; i++) {
      result += "<li>" + items[i] + "</li>\n";
    }

    result += listEnd[format];

    document.getElementById("list").innerHTML = listFormat[format] + "\n" + result;
    document.forms["myform"].elements["result"].value = result;
  }
}


