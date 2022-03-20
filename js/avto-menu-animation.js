const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.header__list')
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuList.classList.toggle('header__list-active')
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuList.classList.remove('header__list-active')
    menuOpen = false;
  }
});