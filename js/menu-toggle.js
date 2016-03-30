var btn = document.querySelector('.menu-toggle');
var navList = document.querySelector('.nav-list');
var pageHeader = document.querySelector('.page-header__main-block');
var headerWrapper = document.querySelector('.wrapper-title--with-phone');
var titlePhone = document.querySelector('.page-header__title--with-phone');

btn.addEventListener('click', function()
{
  btn.classList.toggle('menu-toggle--menu-opened');
  navList.classList.toggle('nav-list--menu-opened');
  pageHeader.classList.toggle('page-header__main-block--menu-opened');
  headerWrapper.classList.toggle('wrapper-title--with-phone--menu-opened');
  titlePhone.classList.toggle('page-header__title--with-phone--menu-opened')
});
