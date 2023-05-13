// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var chooseHorn = document.getElementById("horn-select");

  var volume = document.getElementById("volume");

  var button = document.querySelector("button");

  chooseHorn.addEventListener('change', changeImage);

  volume.addEventListener('input', update_volumn);

  button.addEventListener('click', press_Button);
}



function update_volumn(){
  if (this.value > 66) {
    document.querySelector("#volume-controls > img").src= "assets/icons/volume-level-3.svg";
  } else if (volume.value >32 && volume.value < 67) {
    document.querySelector("#volume-controls > img").src= "assets/icons/volume-level-2.svg";
  } else if (volume.value > 0 && volume.value < 33) {
    document.querySelector("#volume-controls > img").src= "assets/icons/volume-level-1.svg";
  } else {
    document.querySelector("#volume-controls > img").src= "assets/icons/volume-level-0.svg";
  }
}


function changeImage(){
  var image = this.value;  
  document.querySelector("img").src = "assets/images/" + image + ".svg";
  document.querySelector(".hidden").src = "assets/audio/" + image +".mp3";
}

function press_Button(){
  document.querySelector(".hidden").volume = document.getElementById("volume").value / 100;
  document.querySelector(".hidden").play();
}
