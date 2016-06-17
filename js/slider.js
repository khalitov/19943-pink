'use strict'

var priceTable = document.querySelector('.price-section__options-table');
var tableSlider = document.querySelectorAll('.price-section .slider-toggle__toggle-item');
var mentions = document.querySelector('.price-section__options-table');
var mentions = document.querySelector('.mention-section__mentions-wrapper');
var mentionsSlider = document.querySelectorAll('.mention-section .slider-toggle__toggle-item');
var TABLET_WIDTH = "(min-width: 700px)";
var INIT_SLIDER_POSITION = 1;
var INIT_SLIDER_CONTENT_SHIFT = 33.3333;

for (var i = 0; i < tableSlider.length; i++) {
  toggleSlider(tableSlider[i], i, tableSlider, priceTable);
}

for (var i = 0; i < mentionsSlider.length; i++) {
  toggleSlider(mentionsSlider[i], i, mentionsSlider, mentions);
}


mqSliderWatch(priceTable, tableSlider);
mqSliderWatch(mentions, mentionsSlider);

function toggleSlider(sliderElem, i, sliderArr, content) {
  sliderElem.addEventListener('click', function() {
    if (!this.classList.contains('slider-toggle__toggle-item--active')) {
      dumpSliderElem(sliderArr);
    }
    this.classList.add('slider-toggle__toggle-item--active');
    content.style.transform = 'translateX(-' + i * (100 / sliderArr.length) + '%)';
  });
};

function mqSliderWatch(content, slider) {
  var mqTablet = window.matchMedia(TABLET_WIDTH);
  mqTablet.addListener(function() {
    if (mqTablet.matches) {
      content.style.transform = 'translateX(-' + 0 + '%)';
    } else {
      content.style.transform = 'translateX(-' + INIT_SLIDER_CONTENT_SHIFT + '%)';
      dumpSliderElem(slider);
      slider[INIT_SLIDER_POSITION].classList.add('slider-toggle__toggle-item--active');
    }
  });
};

function dumpSliderElem(sliderArr) {
  for (var i = 0; i < sliderArr.length; i++) {
    sliderArr[i].classList.remove('slider-toggle__toggle-item--active');
  }
};
