const burger = document.querySelector('.hamburger-cont');
const hiddenMenu = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  hiddenMenu.classList.toggle('hidden');
});
