// Javascript Functions for Homework 4 Part 3


// principal (the initial amount you borrow or deposit) = P ; 
// the annual rate of interest (percentage) = r ; 
// the number of years the amount is deposited = n ; 
// the amount of money accumulated after n years, including interest = A; 
//
// A = P(1 + r)^n


function compoundInterest(P, r, n) {
	var A = (P * Math.pow(1 + r, n)).toLocaleString('en', {
		style: 'currency',
		currency: 'USD'
	});
	return (A);
}


function compoundInterestTable(P, r, n) {
	document.write("<table>\n");
	document.write("<tr><th>Year</th><th>Amount on deposit</th><th>Interest Rate</th></tr>\n");
	for (i = 1; i <= n; i++) {
		document.write("<tr><td>" + i + "</td><td>" + compoundInterest(P, r, i) + "</td><td>" + r + "</td></tr>\n");
	}
	document.write("</table><br>\n\n");
}