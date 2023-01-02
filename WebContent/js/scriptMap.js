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
  
  /* 
   * Create google maps Marker instance.
   * @param {Object} map
   * @param {Object} position
   * @return {Object}
   */
  /*const createMarker = ({ map, position }) => {
    return new google.maps.Marker({ map, position });
  };*/
  
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
    const initialPosition = { lat: 45.8377928 , lng: 8.8471619 }; 
    const map = createMap(initialPosition);
    const marker = createMarker({ map, position: initialPosition });
    const $info = document.getElementById('info');
  
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
  }
