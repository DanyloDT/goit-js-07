function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const color = document.querySelector('.color');

buttonChangeColor.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  color.textContent = newColor;
});

buttonChangeColor.classList.add('change-color');
