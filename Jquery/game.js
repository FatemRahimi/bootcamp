/*1. Inside game.js create a new function called nextSequence()

2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber

You can use the Chrome console to verify that your code creates random numbers between the correct range.
3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .

4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.

5. At the top of the game.js file, create a new empty array called gamePattern.

6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.*/

const buttonColors = ["red","blue","green","yellow"];
const gamePattern=[];
function nextSequence(){
  // Step 1: Create a new function called nextSequence
function nextSequence() {
    // Step 2: Generate a random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);
  
    // Step 4: Use the random number to select a color from the array
    var randomChosenColour = buttonColours[randomNumber];
  
    // Step 6: Add the new random color to the game pattern array
    gamePattern.push(randomChosenColour);
  
    // Select the button with the same id as the randomChosenColour
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
    // Play the sound for the button colour selected
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
  }
  
  // Call the function to test it
  nextSequence();
  





