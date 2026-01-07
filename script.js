let index = 0;
const slider = document.querySelector('.slider');

function next() {
  index++;
  slider.style.transform = `translateX(-${index * 100}vw)`;
}
