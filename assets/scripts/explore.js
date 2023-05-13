// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const speech_synthesis = window.speechSynthesis;
  const voice_choosen = document.querySelector("#voice-select");
  const button = document.querySelector("button");
  const text = document.querySelector("textarea");
  const image = document.querySelector("img");

  let sound = [];

  speech_synthesis.onvoiceschanged = () => {
    sound = speech_synthesis.getVoices();

    for (let i = 0; i < sound.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${sound[i].name} (${sound[i].lang})`;
  
      if (sound[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', sound[i].lang);
      option.setAttribute('data-name', sound[i].name);
      voice_choosen.appendChild(option);
    }
  };

  button.addEventListener('click', when_click);

  function when_click(){
    const text_val = new SpeechSynthesisUtterance(text.value);
    const selectedOption = voice_choosen.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < sound.length ; i++) {
      if (sound[i].name === selectedOption) {
        text_val.voice = sound[i];
      }
    }
    speech_synthesis.speak(text_val);

    image.setAttribute('src', 'assets/images/smiling-open.png');
    
    text_val.addEventListener('end', toend)
  }

  function toend(){
    image.setAttribute('src', 'assets/images/smiling.png');
  }

}