function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const control = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = control.querySelector('[data-create]');
const destroyBtn = control.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const body = document.querySelector('body');

const createBoxes = (amount) => {
  boxesContainer.innerHTML = '';
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxes.push(box);
    size += 10;
  }
  boxesContainer.append(...boxes);
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
};

createBtn.addEventListener('click', () => {
  const amount = Number(input.value.trim());

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert('Enter a number between 1 and 100');
  }

  input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);

control.classList.add('control');
createBtn.classList.add('create');
destroyBtn.classList.add('destroy');
boxesContainer.classList.add('boxes');
body.classList.add('body-control');
