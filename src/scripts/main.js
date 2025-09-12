'use strict';
// #region menu
const menuButtons = document.querySelectorAll('.top-bar__menu-button');
const sideMenu = document.querySelector('.page__menu');

menuButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const isActive = sideMenu.classList.toggle('is-open');
    document
      .querySelector('.page__body')
      .classList.toggle('no-scroll', isActive);
    menuButtons.forEach((b) => b.classList.toggle('is-active', isActive));
  });
});

// #endregion

// #region slider
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.slider__arrow--left');
const rightArrow = document.querySelector('.slider__arrow--right');

let currentIndex = 1;

function updateSlider() {
  slider.className = `header__slider slider slider--${currentIndex}`;
}

leftArrow.addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex--;
  if (currentIndex < 1) {
    currentIndex = 3;
  }
  updateSlider();
});

rightArrow.addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex++;
  if (currentIndex > 3) {
    currentIndex = 1;
  }
  updateSlider();
});

// #endregion

// #region textarea
const textareas = document.querySelectorAll('textarea.contact-us__input');

textareas.forEach((el) => {
  el.setAttribute('style', 'height:' + el.scrollHeight + 'px;overflow:hidden;');
  el.addEventListener('input', () => {
    el.style.height = '41px';
    el.style.height = el.scrollHeight + 'px';
  });
});

// #endregion
