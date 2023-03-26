function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const buttonEl = bodyEl.querySelector('.change-color');
const spanEl = bodyEl.querySelector('.color');

function changeBackgColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}

buttonEl.addEventListener('click', changeBackgColor);
