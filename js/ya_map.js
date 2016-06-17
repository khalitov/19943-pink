ymaps.ready(init);
var myMap,
  myPlacemark;

function init() {
  myMap = new ymaps.Map("map", {
    center: [59.938604, 30.322507],
    zoom: 18
  });

  myPlacemark = new ymaps.Placemark([59.938604, 30.322507], {
    hintContent: 'Офис',
    balloonContent: 'Добро пожаловать!'
  }, {
    iconLayout: 'default#image',
    iconImageClipRect: [
      [130, 126],
      [180, 180]
    ],
    iconImageHref: '../img/svglogo.svg',
    iconImageSize: [64, 64],
    iconImageOffset: [-3, -42]
  });
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('searchControl');

  myMap.geoObjects.add(myPlacemark);
}
