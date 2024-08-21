//select the #container div
const container = document.querySelector('#container');

for (let i = 1; i <= 16; i++) {
  const div = document.createElement('div');
  div.classList.add('squares');
  container.appendChild(div);
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
