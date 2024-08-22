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

// button.addEventListener('click', () => {
//   const ans = prompt('Enter the amount of squares per side you want (max 100)');
//   const nSquares = parseInt(ans);
// });

button.addEventListener('click', () => {
  while (squarecontain.hasChildNodes()) {
    squarecontain.removeChild(squarecontain.firstChild);
  }
});

button.addEventListener('click', () => {
  const ans = prompt('Enter the amount of squares per side you want (max 100)');
  const nSquares = parseInt(ans);
  for (let i = 1; i <= nSquares; i++) {
    const nSquares = document.createElement('div');
    nSquares.classList.add('newsquares');
    squarecontain.appendChild(nSquares);
  }
});
