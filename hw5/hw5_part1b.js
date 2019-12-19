function goToURL(myForm) {
    window.location = myForm.destinationList.options[myForm.destinationList.selectedIndex].value;
}