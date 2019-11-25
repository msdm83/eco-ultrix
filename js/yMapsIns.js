//points page map initialization
function init2() {
    var myMap = new ymaps.Map('map2', {
            center: [60.01,30.67],
            zoom: 11,
            controls: ['zoomControl']
        });

      //ymaps.geocode('Всеволжск ул  Горсткина д. 14').then(function (res) { myMap.geoObjects.add(res.geoObjects);});

      ymaps.geocode('всеволжск,  микрорайон южный,	Добровольского 16/15	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Невская 11	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Московская 26/28	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Московская 19/5	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Невская 1/2	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Малиновского 6	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Знаменская 1/8	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Крымская 4	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Московская 27/5	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Центральная 10	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Центральная 10/1	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Московская 30	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Добровольского 20/1	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Доктора Сотникова 2	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Солнечная 2	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Доктора Сотникова 13	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Доктора Сотникова 29	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Южная Поляна	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Южная Поляна	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	ЖК Династия	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Центральная 2	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Аэропортовская 12	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Взлетная 12	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Колтушское 19	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Токкари Лэнд	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Токкари Лэнд	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Доктора Сотникова 25/27	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Комсомола 2	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Комсомола 7	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Комсомола 9	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Лубянская 2	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Лубянская 4	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	КП Кенша	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	ДНП Дружное	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	СНТ Родничковое	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Снт Придорожное 1	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Снт Придорожное 2	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Аэропортовская 1	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Аэропортовская 4	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Аэропортовская 5	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Аэропортовская 8	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Аэропортовская 12	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Центральная 11	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Московская 12	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Невская 6	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Народная 8	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});
      ymaps.geocode('всеволжск,  микрорайон южный,	Невская 12	').then(function (res) { myMap.geoObjects.add(res.geoObjects);});


}
ymaps.ready(init2);



//contact page map initialization
function init1() {
    var myMap = new ymaps.Map('map1', {
            center: [59.94079856, 30.390491],
            zoom: 11,
            controls: ['zoomControl']
        });

        var myPlacemark = new ymaps.Placemark([59.94079856, 30.390491], {
            balloonContentHeader: 'Новгородская ул., 23',
            balloonContentBody: 'Новгородская ул., 23, Санкт-Петербург, 191124',
            hintContent: 'Новгородская ул., 23',
            balloonContent:'Новгородская ул., 23',
        });

        myMap.geoObjects.add(myPlacemark);
        myPlacemark.balloon.open();
}
ymaps.ready(init1);
/*// Создаем коллекцию.
  //  myCollection = new ymaps.GeoObjectCollection(),
// Создаем массив с данными.
    myPoints = [
        { coords: [60.01, 30.675], text: 'Трактир' },
        { coords: [60.01, 30.678], text: 'Кафе' },
        { coords: [60.02, 30.54], text: 'Ресторан' },
        { coords: [60.01, 30.676], text: 'Музей' },
        { coords: [60.03, 30.671], text: 'Библиотека' },
        { coords: [60.04, 30.672], text: 'Школа' },
    ];
    // Заполняем коллекцию данными.
    for (var i = 0, l = myPoints.length; i < l; i++) {
        var point = myPoints[i];
        myCollection.add(new ymaps.Placemark(
            point.coords, {
                balloonContentBody: point.text
            }
        ));
    }
    //myMap.geoObjects.add(myCollection);*/
