import './js/modul-12.js';
// import './js/modul-11.js';
// import './js/modul-10.js';
// import './js/modul-9.js';
// import './js/modul-8.js';
// import './js/modul-7.js';
// import './js/modul-6.js';
// import './js/modul-5.js';
// import './js/modul-4.js';
// import './js/modul-3.js';
// import './js/modul-2.js';

const btnMenuOpen = document.querySelector('.btn-menu-open');
const containerMenu = document.querySelector('.mob-menu');
btnMenuOpen.addEventListener('click', handleOpenMenu);
function handleOpenMenu(event) {
  containerMenu.classList.add('isVisibleMenu');
  if (event.target.classList.contains('.item-nav')) {
    console.log('mda');

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
