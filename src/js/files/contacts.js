function init() {
  let map = new ymaps.Map("map", {
    center: [55.677176944132704, 37.61824045767209],
    zoom: 16,
  });

  let placemark = new ymaps.Placemark(
    [55.677176944132704, 37.61824045767209],
    {},
    {
      iconLayout: "default#image",
      iconImageHref:
        "https://cdn-icons-png.flaticon.com/512/14438/14438151.png",
      iconImageSize: [50, 50],
      iconImageOffset: [-25, -40],
    }
  );

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  // map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark);
}



ymaps.ready(init);
