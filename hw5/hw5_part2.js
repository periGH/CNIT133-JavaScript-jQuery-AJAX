

var statesArray = [
	["AL", "Alabama", "Montgomery", "4,779,736"],
	["AK", "Alaska", "Juneau", "710,231"],
	["AZ", "Arizona", "Phoenix", "6,392,017"],
	["AR", "Arkansas", "Little Rock", "2,915,918"],
	["CA", "California", "Sacramento", "37,253,956"],
	["CO", "Colorado", "Denver", "5,029,196"] ];


function ButtonPressed()  
{
    var searchKey = document.forms["SearchForm"].elements["searchInput"].value;
    searchKey = searchKey.toUpperCase();
    
    var found = false;
    for (var row = 0; row < statesArray.length; row++)
    {
	
     if ((statesArray[row][0] == searchKey) || (statesArray[row][1].toUpperCase() == searchKey))

     { 
       document.forms["SearchForm"].elements["searchInput"].value = statesArray[row][1];
       document.forms["SearchForm"].elements["capitol"].value = statesArray[row][2];
       document.forms["SearchForm"].elements["population"].value = statesArray[row][3];  
       row = statesArray.length;  
     }
           
  }

  if ( found == false ) {
   document.forms["SearchForm"].elements["searchInput"].value= "State not found!"; 
  }

  document.getElementById("searchInput").select();
  document.getElementById("searchInput").focus();

}
