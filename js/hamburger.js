const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.navigation nav');

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
