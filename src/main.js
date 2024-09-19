let lastScrollPosition = 0;

const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');

burger.addEventListener('click', () => {
  header.classList.add('open');
});

close.addEventListener('click', () => {
  header.classList.remove('open');
});

document.body.style.overflowX = 'hidden';

window.addEventListener('scroll', () => {
  let currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition > lastScrollPosition) {
    header.classList.remove('open');
    header.style.top = '-150px';
  } else {
    header.style.top = '0';
  }

  lastScrollPosition = currentScrollPosition;
});

document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const targetId = question.getAttribute('data-target');
      const answer = document.getElementById(targetId);

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }

      question.classList.toggle('active');
    });
  });
});
