let map;

async function initMap() {
  const position = { lat: 48.234025, lng: 16.337674 };
  // const { Map } = await google.maps.importLibrary('maps');
  // const { AdvancedMarkerView } = await google.maps.importLibrary('marker');

  map = new google.maps.Map(document.getElementById('map'), {
    center: position,
    zoom: 16.5,
    mapId: 'JLT',
  });

  const marker = new google.maps.Marker({
    map: map,
    position: position,
    title: 'Treffpunkt',
  });
}
initMap();
