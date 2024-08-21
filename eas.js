//select the #container div
const container = document.querySelector('#container');

const squarecontain = document.createElement('div');
squarecontain.classList.add('squarecontain');
container.appendChild(squarecontain);

for (let i = 1; i <= 16; i++) {
  const div = document.createElement('div');
  div.classList.add('squares');
  squarecontain.appendChild(div);
}

const hover = document.querySelectorAll('.squares');

for (let i = 0; i < hover.length; i++) {
  hover[i].addEventListener('mouseover', () => {
    hover[i].style.backgroundColor = 'lime';
  });
}

for (let i = 0; i < hover.length; i++) {
  hover[i].addEventListener('mouseout', () => {
    hover[i].style.backgroundColor = '';
  });
}

const button = document.createElement('button');
button.textContent = 'Click me!';
button.classList.add('button');
container.insertAdjacentElement('afterbegin', button);

button.addEventListener('click', () => {
  prompt('Select a new grid size');
});
