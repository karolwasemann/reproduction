import './style.css';

const fakeCanvas = document.querySelectorAll('.fake-canvas .pixel');
const originalCanvas = document.querySelectorAll('.original-canvas .pixel');

originalCanvas.forEach((el, index) => {
  if (el.classList.contains('pixel-dot'))
    fakeCanvas[index].classList.add('pixel-dot');
});
