'use strict';
const btnMenuOpen = document.querySelector('.btn-menu-open');
const containerMenu = document.querySelector('.mob-menu');
btnMenuOpen.addEventListener('click', handleOpenMenu);
function handleOpenMenu(event) {
  containerMenu.classList.add('isVisibleMenu');
}

const btnCloseMenu = document.querySelector('.btn-menu-close');
btnCloseMenu.addEventListener('click', handleCloseMenu);
function handleCloseMenu(event) {
  containerMenu.classList.remove('isVisibleMenu');
}

const list = document.querySelectorAll('.nav-list');
list.addEventListener('click', handleMoveForLink);
function handleMoveForLink(event) {
  if (!event.target.classList.contains('.link-nav')) {
    return;
  }
  containerMenu.classList.remove('isVisibleMenu');
}
