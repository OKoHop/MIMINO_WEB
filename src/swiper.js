const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelector('.gallery');
const slideWidth = document.querySelector('.gallery-item').clientWidth;

let counter = 0;

nextBtn.addEventListener('click', () => {
  if (counter >= slides.children.length - 1) return;
  counter++;
  slides.style.transform = `translateX(${-slideWidth * counter}px)`;
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  counter--;
  slides.style.transform = `translateX(${-slideWidth * counter}px)`;
});
