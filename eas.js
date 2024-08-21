//select the #container div
const container = document.querySelector('#container');

for (let i = 1; i <= 16; i++) {
  const div = document.createElement('div');
  div.classList.add('squares');
  div.style.cssText =
    'width: 100px; height: 100px; border-style: solid; border-color: black; border-width: 1px';
  container.appendChild(div);
}
