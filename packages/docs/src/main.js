import './style.css';

import './tone-palette.js';

function changeColor(evt) {
  const colorPicker = document.querySelector('[name=colorpicker]');
  const palettes = document.querySelectorAll('[for=colorpicker]');

  palettes.forEach((palette) => {
    palette.style.setProperty('--color-dynamic', `hsl(${colorPicker.value}, 100%, 50%)`);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const colorPicker = document.querySelector('[name=colorpicker]');

  colorPicker.addEventListener('input', changeColor);

  colorPicker.value = Math.random() * 360;
  changeColor();
});
