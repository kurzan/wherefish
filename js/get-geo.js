navigator.geolocation.getCurrentPosition(success, error, {
  // высокая точность
  enableHighAccuracy: true
})

function success({ coords }) {
  // получаем широту и долготу
  const { latitude, longitude } = coords
  const position = [latitude, longitude]
  console.log(position) // [широта, долгота]
}

function error({ message }) {
  console.log(message) // при отказе в доступе получаем PositionError: User denied Geolocation
}