const resetButton = document.querySelector('#reset');

const map = L.map('map')
  .setView({
    lat: 56.0180,
    lng: 47.2094,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const points = [
  {
    title: 'Хурнылых',
    fish: ['Щука', 'Окунь', 'Красноперка'],
    lat:56.0249,
    lng: 47.1960,
  },
  {
    title: 'Самуково',
    fish: ['Окунь', 'Красноперка'],
    lat: 56.0130,
    lng: 47.2230,
  },
  {
    title: 'Пруд с карасями',
    fish: ['Карась',],
    lat: 56.0269,
    lng: 47.2286,
  },
];

// const getFishes = (water) => {
//   water.
// };


points.forEach(({lat, lng, title}) => {
  const marker = L.marker({
    lat,
    lng,
    title,
  });

  marker
    .addTo(map)
    .bindPopup(title);
});

const mainMarkerIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: 56.0180,
    lng: 47.2094,
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

mainMarker
  .addTo(map)
  .bindPopup('Я здесь');

// mainMarker.on('moveend', (evt) => {
//   console.log(evt.target.getLatLng());
// });

resetButton.addEventListener('click', () => {
  mainMarker.setLatLng({
    lat: 56.0180,
    lng: 47.2094,
  });

  map.setView({
    lat: 56.0180,
    lng: 47.2094,
  }, 13);
});