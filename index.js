import './style.css';

const PIXEL_COLOR = '#e44d4d';

const fakeCanvas = document.querySelectorAll('.fake-canvas .pixel');
const originalCanvas = document.querySelectorAll('.original-canvas .pixel');

originalCanvas.forEach((el, index) => {
  if (el.classList.contains('pixel-dot'))
    fakeCanvas[index].classList.add('pixel-dot');
});
