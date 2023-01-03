// Initialize and add the map
function initMap() {
  // The location of Uluru
  var position = [45.46487396906016, 9.193401838780664];
  const partenza = { lat: position[0], lng: position[1] };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: partenza,
  });
  // The marker, positioned at Uluru
  var marker_partenza = new google.maps.Marker({
    position: partenza,
    map: map,
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    }
  });
  /*const marker_b = new google.maps.Marker({
    position: { lat: 45.48517073702312, lng: 9.193401838780664 },
    map: map
  })*/
  var fermate = [
    new google.maps.Marker({
      position: { lat: 45.46487396906016, lng: 9.193401838780664 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.466396217241524, lng: 9.197577245397706 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.4647340644238, lng: 9.192724657101353 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46578523104162, lng: 9.185615615595148 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46874957726051, lng: 9.181344292761082 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46793829799989, lng: 9.176783765776795 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46191346841282, lng: 9.173412006263305 },
      map: map
    }),
  ]
  const fermate2 = [
    { lat: 45.46487396906016, lng: 9.193401838780664 },
    { lat: 45.466396217241524, lng: 9.197577245397706 },
    { lat: 45.46487396906016, lng: 9.193401838780664 },
    { lat: 45.4647340644238, lng: 9.192724657101353 },
    { lat: 45.46578523104162, lng: 9.185615615595148 },
    { lat: 45.46874957726051, lng: 9.181344292761082 },
    { lat: 45.46793829799989, lng: 9.176783765776795 },
    { lat: 45.46191346841282, lng: 9.173412006263305 }
  ]
  const bus1 = new google.maps.Polyline({
    path: fermate2,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  bus1.setMap(map);
  google.maps.event.addListener(map, 'DOMContentLoaded', function (event) {
    var result = [event.latLng.lat(), event.latLng.lng()];
    transition(result);
  });

  function changeMarkerPosition(marker) {
    var latlng = new google.maps.LatLng(45.46692879073799, 9.195413305459017);
    marker.setPosition(latlng);
}
changeMarkerPosition(marker_partenza);

 /* var numDeltas = 100;
  var delay = 10; //milliseconds
  var i = 0;
  var deltaLat;
  var deltaLng;

 


  function transition(result) {
    i = 0;
    deltaLat = (result[0] - position[0]) / numDeltas;
    deltaLng = (result[1] - position[1]) / numDeltas;
    moveMarker();
  }

  function moveMarker() {
    position[0] += deltaLat;
    position[1] += deltaLng;
    var partenza = new google.maps.LatLng(position[0], position[1]);
    marker.setTitle("Latitude:" + position[0] + " | Longitude:" + position[1]);
    marker.setPosition(partenza);
    if (i != numDeltas) {
      i++;
      setTimeout(moveMarker, delay);
    }
  }*/
}
window.initMap = initMap;