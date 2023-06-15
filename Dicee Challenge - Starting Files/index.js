var randomNum = Math.floor(Math.random() * 6) + 1;

// Construct the dice name based on the random number
var randomDiceImage = "dice" + randomNum + ".png";
//construct the full name base on the random number
var randomImageSource="images/" + randomDiceImage;
// Assuming you have an <img> element with an id of 'diceImg'
image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource)

