
for (let i=0; i < document.querySelectorAll(".drum").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var audio = new Audio ("sounds/tom-2.mp3");
    audio.play();
})
}

