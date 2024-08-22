//select the #container div
const container = document.querySelector('#container');

const mainContainer = document.querySelector('#mainContainer');

for (let i = 1; i <= 4; i++) {
  const squarecontain = document.createElement('div');
  squarecontain.classList.add('squarecontain');
  container.appendChild(squarecontain);

  for (let i = 1; i <= 4; i++) {
    const div = document.createElement('div');
    div.classList.add('squares');
    squarecontain.appendChild(div);
  }
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
mainContainer.insertAdjacentElement('afterbegin', button);

button.addEventListener('click', () => {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
});

button.addEventListener('click', () => {
  const ans = prompt('Enter the amount of squares per side you want (max 100)');
  const nSquares = parseInt(ans);
  console.log(nSquares);

  for (let i = 1; i <= nSquares; i++) {
    const squarecontain = document.createElement('div');
    squarecontain.classList.add('squarecontain');
    container.appendChild(squarecontain);

    for (let i = 1; i <= nSquares; i++) {
      const div = document.createElement('div');
      div.classList.add('squares');
      squarecontain.appendChild(div);
    }
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
});
