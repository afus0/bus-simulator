/**
 * Create google maps Map instance.
 * @param {number} lat
 * @param {number} lng
 * @return {Object}
 */
const createMap = ({ lat, lng }) => {
  return new google.maps.Map(document.getElementById('map'), {
    center: { lat, lng },
    zoom: 15
  });
};

/**
 * Create google maps Marker instance.
 * @param {Object} map
 * @param {Object} position
 * @return {Object}
 */
const createMarker = ({ map, position }) => {
  return new google.maps.Marker({ map, position });
};

/**
 * Track the user location.
 * @param {Object} onSuccess
 * @param {Object} [onError]
 * @return {number}
 */
const trackLocation = ({ onSuccess, onError = () => { } }) => {
  if ('geolocation' in navigator === false) {
    return onError(new Error('La geolocalizzazione non è supportata sul tuo browser.'));
  }

  return navigator.geolocation.watchPosition(onSuccess, onError, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  });
};

/**
 * Get position error message from the given error code.
 * @param {number} code
 * @return {String}
 */
const getPositionErrorMessage = code => {
  switch (code) {
    case 1:
      return 'Permesso negato.';
    case 2:
      return 'Posizione non disponibile.';
    case 3:
      return 'Timeout raggiunto.';
  }
}

/**
 * Initialize the application.
 * Automatically called by the google maps API once it's loaded.
*/
function init() {
  const initialPosition = { lat: 45.8377928, lng: 8.8471619 };
  const map = createMap(initialPosition);
  const marker = createMarker({ map, position: initialPosition });
  const $info = document.getElementById('info');
  var marker2 = new google.maps.Marker({
    position: { lat: 45.48517073702312, lng: 9.215866423328977 },
    map: map,
    title: 'Bus'
  });
  var marker3 = new google.maps.Marker({
    position: { lat: 45.49588093388769, lng: 9.219514227540508 },
    map: map
  });
  let watchId = trackLocation({
    onSuccess: ({ coords: { latitude: lat, longitude: lng } }) => {
      marker.setPosition({ lat, lng });
      map.panTo({ lat, lng });
      $info.textContent = `Lat: ${lat.toFixed(5)} Lng: ${lng.toFixed(5)}`;
      $info.classList.remove('error');
    },
    onError: err => {
      console.log($info);
      $info.textContent = `Error: ${err.message || getPositionErrorMessage(err.code)}`;
      $info.classList.add('error');
    }
  });
  var fermate = [
    ['Loreto', 45.48517073702312, 9.215866423328977, 4],
    ['Rovereto', 45.49588093388769, 9.219514227540508, 5],
    ['Udine', 45.491619431739565, 9.236910830588775, 3],
  ];
  var infowindow = new google.maps.InfoWindow();
  var punto, i;

  for (i = 0; i < locations.length; i++) {
    punto = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(punto, 'click', (function (punto, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, punto);
      }
    })(punto, i));
  }
}
