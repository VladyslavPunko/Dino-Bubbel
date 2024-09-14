const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');

burger.addEventListener('click', () => {
  header.classList.add('open');
});

close.addEventListener('click', () => {
  header.classList.remove('open');
});
