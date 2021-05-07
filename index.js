import './style.css';

const PIXEL_COLOR = '#e44d4d';

const fakeCanvas = document.querySelectorAll('.fake-canvas .pixel');
const orCanvas = document.querySelectorAll('.original-canvas .pixel');

orCanvas.forEach((elemnt, index) => {
  if (elemnt.classList.contains('pixel-dot'))
    fakeCanvas[index].classList.add('pixel-dot');
});
