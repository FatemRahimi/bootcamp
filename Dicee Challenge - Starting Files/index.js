var randomNum = Math.floor(Math.random() * 6) + 1;

// Construct the file name based on the random number
var diceImage = "dice" + randomNum + ".png";

// Assuming you have an <img> element with an id of 'diceImg'
document.getElementsByTagName("img").src = diceImage;