// Javascript Functions for Homework 4 Part 6

// jQuery animations which set the image sizes after loading the page and when hovering in and out

$(document).ready(function() {
    $("img").animate({
        height: "180px"
    }, "slow");

    $("img").hover(function() {
        $(this).animate({
            height: "240px"
        }, "slow");
    }, function() {
        $(this).animate({
            height: "180px"
        }, "slow");
    });
});

// Put the verses in a couple arrays.

days = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"];

verses = ["a Partridge in a Pear Tree",
    "Two Turtle Doves",
    "Three French Hens",
    "Four Calling Birds",
    "Five Golden Rings",
    "Six Geese a Laying",
    "Seven Swans a Swimming",
    "Eight Maids a Milking",
    "Nine Ladies Dancing",
    "Ten Lords a Leaping",
    "Eleven Pipers Piping",
    "Twelve Drummers Drumming"
];

// single verse.

function verse(n) {
    document.write("On the <strong>" + days[n - 1] + "</strong> day of Christmas ");
    document.write("my true love sent to me\n");

    switch (n) {
        case 12:
            document.write(verses[11] + "\n");
        case 11:
            document.write(verses[10] + "\n");
        case 10:
            document.write(verses[9] + "\n");
        case 9:
            document.write(verses[8] + "\n");
        case 8:
            document.write(verses[7] + "\n");
        case 7:
            document.write(verses[6] + "\n");
        case 6:
            document.write(verses[5] + "\n");
        case 5:
            document.write(verses[4] + "\n");
        case 4:
            document.write(verses[3] + "\n");
        case 3:
            document.write(verses[2] + "\n");
        case 2:
            document.write(verses[1] + "\nand ");
        default:
            document.write(verses[0]);
    }
    if (n < 12) document.write("\n\n");
}

// Display the full twelve verses.

function twelveDays() {
    for (n = 1; n <= 12; n++) {
        verse(n);
    }
}