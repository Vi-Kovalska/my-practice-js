import './js/modul-12.js';
import './js/modul-11.js';
import './js/modul-10.js';
import './js/modul-9.js';
import './js/modul-8.js';
import './js/modul-7.js';
import './js/modul-6.js';
import './js/modul-5.js';
import './js/modul-4.js';
import './js/modul-3.js';
import './js/modul-2.js';

const btnMenuOpen = document.querySelector('.btn-menu-open');
const containerMenu = document.querySelector('.mob-menu');

const savedTheme = localStorage.getItem('theme');

btnMenuOpen.addEventListener('click', handleOpenMenu);
function handleOpenMenu(event) {
  if (savedTheme === 'dark') {
    containerMenu.classList.remove('light');
    containerMenu.classList.add('dark');
  } else if (savedTheme === 'light') {
    containerMenu.classList.remove('dark');
    containerMenu.classList.add('light');
  }
  containerMenu.classList.add('isVisibleMenu');
  if (event.target.classList.contains('.item-nav')) {
    containerMenu.classList.remove('isVisibleMenu');
  }
}

// const btnCloseMenu = document.querySelector('.btn-menu-close');
// btnCloseMenu.addEventListener('click', handleCloseMenu);
// function handleCloseMenu(event) {
//   containerMenu.classList.remove('isVisibleMenu');
// }
const menu = document.querySelector('.mob-menu');
menu.addEventListener('click', handleMenuInteractive);
function handleMenuInteractive(event) {
  console.log(event.target);

  if (
    event.target.classList.contains('link-nav') ||
    event.target.classList.contains('use-icon-close')
  ) {
    containerMenu.classList.remove('isVisibleMenu');
  }
}
// const list = document.querySelectorAll('.nav-list');
// list.addEventListener('click', handleMoveForLink);
// function handleMoveForLink(event) {
//   console.log('MODAL');
//   if (!event.target.classList.contains('.item-nav')) {
//     return;
//   }
//   containerMenu.classList.remove('isVisibleMenu');
// }
// EX 5
// робимо перемикання світла/темна тема за допомогою чекбокса
const checkboxTheme = document.querySelector('#checkbox2');
const cyrcle = document.querySelector('.checkbox-cyrcle');

checkboxTheme.addEventListener('change', handleChangeTheme);

if (savedTheme === 'dark') {
  // cyrcle.insertAdjacentHTML('afterbegin', '<svg class="sun-icon" width="15" heigh="15"><use href="../images/icons/switcher.svg#sun"></use></svg>');
  cyrcle.innerHTML =
    '<svg class="star-icon" width="15" heigh="15"><use href="./images/icons/switcher.svg#star"></use></svg>';
  cyrcle.style.top = '1px';
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  checkboxTheme.checked = true;
} else if (savedTheme === 'light') {
  cyrcle.innerHTML =
    '<svg class="sun-icon" width="18" heigh="18"><use href="./images/icons/switcher.svg#sun"></use></svg>';
  cyrcle.style.top = '1px';
  document.body.classList.add('light');
  document.body.classList.remove('dark');
  checkboxTheme.checked = false;
}
function handleChangeTheme(event) {
  if (event.target.checked) {
    cyrcle.innerHTML =
      '<svg class="star-icon" width="15" heigh="15"><use href="./images/icons/switcher.svg#star"></use></svg>';
    cyrcle.style.top = '5px';
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    document.body.classList.remove('light');
  } else {
    cyrcle.innerHTML =
      '<svg class="sun-icon" width="18" heigh="18"><use href="./images/icons/switcher.svg#sun"></use></svg>';
    cyrcle.style.top = '5px';
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light');
    document.body.classList.remove('dark');
  }
}
