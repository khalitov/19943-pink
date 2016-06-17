var btn = document.querySelector('.menu-toggle');
var navList = document.querySelector('.nav-list');
var pageHeader = document.querySelector('.page-header');
var pageHeaderMain = document.querySelector('.page-header__main-block');
var titlePhone = document.querySelector('.page-header__title--with-phone');
var pageTitle = document.querySelector('.page-header__title');

hideMenu();

function hideMenu() {
  pageHeader.classList.remove('page-header--no-js');
  navList.classList.remove('nav-list--no-js');
  pageHeader.classList.add('page-header--js');
  navList.classList.add('nav-list--js');
  if (titlePhone) {
    titlePhone.classList.remove('page-header__title--with-phone--no-js');
  } else {
    pageTitle.classList.remove('page-header__title--no-js');
  }

  btn.classList.toggle('menu-toggle--menu-opened');
  navList.classList.toggle('nav-list--menu-opened');
  pageHeaderMain.classList.toggle('page-header__main-block--menu-opened');

  btn.addEventListener('click', function() {
    btn.classList.toggle('menu-toggle--menu-opened');
    navList.classList.toggle('nav-list--menu-opened');
    pageHeaderMain.classList.toggle('page-header__main-block--menu-opened');
    if (titlePhone) {
      titlePhone.classList.toggle('page-header__title--with-phone--menu-opened')
    } else {
      pageTitle.classList.toggle('page-header__title--menu-opened');
    }
  });
};
