// Select burger button

const burgerBtn = document.querySelector('.burgerMenu');
const navOpen = document.querySelector('.nav');
const header = document.querySelector('header');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  navOpen.classList.toggle('open');
});
