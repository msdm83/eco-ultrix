//points page map initialization
function initPointsMap() {
  var myMap = new ymaps.Map('map2', {
    center: [60.01,30.67],
    zoom: 10,
    controls: ['zoomControl']
  }),
  objectManager = new ymaps.ObjectManager({
    // Чтобы метки начали кластеризоваться, выставляем опцию.
    clusterize: false,
    // ObjectManager принимает те же опции, что и кластеризатор.
    gridSize: 32,
    clusterDisableClickZoom: false
  });

  // Чтобы задать опции одиночным объектам и кластерам,
  // обратимся к дочерним коллекциям ObjectManager.
  objectManager.objects.options.set('preset', 'islands#greenDotIcon');
  objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
  myMap.geoObjects.add(objectManager);

  $.getJSON("/js/points.json", function(points) {
      objectManager.add(points);
    })
  .fail(function(e) {
    console.log( ["error", e] );
  })
  .always(function() {
    console.log( "complete" );
  });
}



//contact page map initialization
function initContactMap() {
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

jQuery(document).ready(function($) {
  ymaps.ready(initPointsMap);
  ymaps.ready(initContactMap);
});
