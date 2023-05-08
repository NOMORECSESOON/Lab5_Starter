// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var whichHorn = document.getElementById("horn-select");

  var volume = document.getElementById("volume");

  var button = document.querySelector("button");

  whichHorn.addEventListener('change', changeImage);

  volume.addEventListener('input', volumeChanger);

  button.addEventListener('click', pressButton);
}
// function to change the volumn icon
function volumeChanger(){
  if (this.value == 0) {
    document.querySelector("#volume-controls > img").src= "assets/icons/volume-level-0.svg";
  } else if (volume.value > 0 && volume.value < 33) {
    document.querySelector("#volume-controls > img").src= "assets/icons/volume-level-1.svg";
  } else if (volume.value >32 && volume.value < 67) {
    document.querySelector("#volume-controls > img").src= "assets/icons/volume-level-2.svg";
  } else {
    document.querySelector("#volume-controls > img").src= "assets/icons/volume-level-3.svg";
  }
}

// change image icon based on the selection
function changeImage(){
  var image = this.value;  
  document.querySelector("img").src = "assets/images/" + image + ".svg";
  document.querySelector(".hidden").src = "assets/audio/" + image +".mp3";
}

// action after user press the button 
function pressButton(){
  document.querySelector(".hidden").volume = document.getElementById("volume").value / 100;
  document.querySelector(".hidden").play();
}
