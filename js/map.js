// //////////////////////////////// //
// ////////// Google Map ////////// //
// //////////////////////////////// //

((g) => {
  var h,
    a,
    k,
    p = 'The Google Maps JavaScript API',
    c = 'google',
    l = 'importLibrary',
    q = '__ib__',
    m = document,
    b = window;
  b = b[c] || (b[c] = {});
  var d = b.maps || (b.maps = {}),
    r = new Set(),
    e = new URLSearchParams(),
    u = () =>
      h ||
      (h = new Promise(async (f, n) => {
        await (a = m.createElement('script'));
        e.set('libraries', [...r] + '');
        for (k in g)
          e.set(
            k.replace(/[A-Z]/g, (t) => '_' + t[0].toLowerCase()),
            g[k]
          );
        e.set('callback', c + '.maps.' + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f;
        a.onerror = () => (h = n(Error(p + ' could not load.')));
        a.nonce = m.querySelector('script[nonce]')?.nonce || '';
        m.head.append(a);
      }));
  d[l] ? console.warn(p + ' only loads once. Ignoring:', g) : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({
  key: 'AIzaSyBtjaD-saUZQ47PbxigOg25cvuO6_SuX3M',
  v: 'weekly',
});

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary('maps');
  const position = { lat: 48.234025, lng: 16.337674 };
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  map = new Map(document.getElementById('map'), {
    center: position,
    zoom: 16.5,
    mapId: 'JLT',
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: name,
  });
}
initMap();
