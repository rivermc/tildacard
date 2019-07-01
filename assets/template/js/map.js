var Map;
var myPlacemark;

function initShip(coords) {
    
    console.log(coords);
    Map = new ymaps.Map("map", {
        center: coords,
        controls: ['typeSelector', 'fullscreenControl'],
        zoom: 8
    });
    addPlacemark(coords);
    
}

function addPlacemark(coords) {
    myPlacemark = new ymaps.Placemark(coords, {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '/assets/template/images/icon-map.png',
        // Размеры метки.
        iconImageSize: [42, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-21, -21]
    });

    Map.geoObjects.add(myPlacemark);
    
}

function cityGeocode(address) {
    ymaps.geocode(address, { //геокодирование адреса
        results: 1
    }).then(function (res) {
        // Выбираем первый результат геокодирования.
        var firstGeoObject = res.geoObjects.get(0);
        // Координаты геообъекта.
        coords = firstGeoObject.geometry.getCoordinates();
        //routeCreate(coords); // вызов функции построения маршрута
        initShip(coords);
    });    
}