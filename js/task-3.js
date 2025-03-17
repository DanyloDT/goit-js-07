const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const body = document.querySelector('body');

console.log(body);

input.addEventListener('input', (e) => {
  const name = e.target.value.trim();
  console.log(name);
  output.textContent = name || 'Anonymous';
});

body.classList.add('body-text');
input.classList.add('name-input');
