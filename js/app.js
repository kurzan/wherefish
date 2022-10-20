const resetButton = document.querySelector('#reset');
const createMarkerButton = document.querySelector('#createmarker');

const createMarkerElement = document.querySelector('.create-marker');

const createMarkerForm = document.querySelector('.create-marker-form');

const markerFormClose = document.querySelector('.marker-cancel-button');
const markerFormSave = document.querySelector('.marker-save-button');

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
    description: 'Есть щука и окунь',
    lat:56.0249,
    lng: 47.1960,
  },
  {
    title: 'Самуково',
    description: 'Много красноперок и мелкого окуня',
    lat: 56.0130,
    lng: 47.2230,
  },
  {
    title: 'Пруд с карасями',
    description: 'Мелкие карасики идут один за одним',
    lat: 56.0269,
    lng: 47.2286,
  },
];

// const getFishes = (water) => {
//   water.
// };

const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#balloon').content.querySelector('.balloon');
  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.balloon__title').textContent = point.title;
  popupElement.querySelector('.balloon__lat-lng').textContent = `Комментарий: ${point.description}`;

  return popupElement;
};

points.forEach((point) => {
  const {lat, lng} = point
  const marker = L.marker({
    lat,
    lng,
  });

  marker
    .addTo(map)
    .bindPopup(createCustomPopup(point));
});

const mainMarkerIcon = L.icon({
  iconUrl: './img/location.png',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const mainMarker = L.marker(
  {
    lat: 56.0180,
    lng: 47.2094,
  },
  {
    icon: mainMarkerIcon,
  },
);

mainMarker
  .addTo(map)
  .bindPopup('Я здесь');


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

//клик на кнопку Создать метку
createMarkerButton.addEventListener('click', () => {
  const createMarkerIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });
  
  const createMarker = L.marker(
    {
      lat: 56.0180,
      lng: 47.2094,
    },
    {
      draggable: true,
      icon: createMarkerIcon,
    },
  );
  
  createMarker
    .addTo(map);


  createMarker.on('moveend', (evt) => {
    console.log(evt.target.getLatLng());
  });

  createMarkerButton.classList.add('hiden');
  createMarkerForm.classList.remove('hiden');

  markerFormClose.addEventListener('click', () => {
    createMarkerForm.classList.add('hiden');
    createMarkerButton.classList.remove('hiden');
    createMarker.remove();
  });
  
});

createMarkerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const title = document.querySelector('.marker-input-title');
  const comment = document.querySelector('.marker-input-comment');

  const createMarker = L.marker({
    title: title.value,
    description: comment.value,
    lat: 56.02161358827811,
    lng: 47.22930125892164,
});
  
  createMarker
    .addTo(map)
    .createCustomPopup(createMarker);

});


