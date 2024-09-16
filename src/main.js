const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');

burger.addEventListener('click', () => {
  header.classList.add('open');
});

close.addEventListener('click', () => {
  header.classList.remove('open');
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
