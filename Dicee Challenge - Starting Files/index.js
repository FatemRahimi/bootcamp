var randomNum = Math.floor(Math.random() * 6) + 1;

// Construct the dice name based on the random number
var randomDiceImage = "dice" + randomNum + ".png";
//construct the full name base on the random number
var randomImageSource="images/" + randomDiceImage;
// Assuming you have an <img> element with an id of 'diceImg'
image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource)

var randomNum1 = Math.floor(Math.random() * 6) + 1;

// Construct the dice name based on the random number
var randomDiceImage = "dice" + randomNum1 + ".png";
//construct the full name base on the random number
var randomImageSource2="images/" + randomDiceImage;
// Assuming you have an <img> element with an id of 'diceImg'
image1= document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource2)

if (randomNum > randomNum1){
    document.querySelector("h1").innerHTML="😍 YOU lost"


    }else if (randomNum < randomNum1){
        document.querySelector("h1").innerHTML="🤩you win"
    }else{  
        
        document.querySelector("h1").innerHTML="equal"}
