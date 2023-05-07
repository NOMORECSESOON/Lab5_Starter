// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector("#voice-select");
  const button = document.querySelector("button");
  const text = document.querySelector("textarea");
  const image = document.querySelector("img");

  let voices = [];

  synth.onvoiceschanged = () => {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  };

  button.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(text.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);

    image.setAttribute('src', 'assets/images/smiling-open.png');
    
    utterThis.addEventListener('end', () => {
      image.setAttribute('src', 'assets/images/smiling.png');
    });
  });
}