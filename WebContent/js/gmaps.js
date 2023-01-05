// Funzione che fa partire maps
function initMap() {
  // Posizione di partenza 
  var position = [45.466396217241524, 9.197577245397706];
  const partenza = { lat: position[0], lng: position[1] };
  // La mappa che centra la posizione di partenza
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: partenza,
  });
  // Creazione del marker "partenza"
  var marker_partenza = new google.maps.Marker({
    position: partenza,
    map: map,
    icon: {
      url: "/img/LineaGialla36.png"
    }
  });
 
  // Creazione array di markers
  var fermate = [
    new google.maps.Marker({
      position: { lat: 45.466396217241524, lng: 9.197577245397706 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46487396906016, lng: 9.193401838780664 },
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
 
  //Creazione di un semplice array con le cordinate dei markers di riga  21;
  const fermate2 = [
    { lat: 45.466396217241524, lng: 9.197577245397706 },
    { lat: 45.46487396906016, lng: 9.193401838780664 },
    { lat: 45.4647340644238, lng: 9.192724657101353 },
    { lat: 45.46578523104162, lng: 9.185615615595148 },
    { lat: 45.46874957726051, lng: 9.181344292761082 },
    { lat: 45.46793829799989, lng: 9.176783765776795 },
    { lat: 45.46191346841282, lng: 9.173412006263305 }
  ]
 
  // Creazione linea rossa trasparente di tutto il tragitto
  const bus1 = new google.maps.Polyline({
    path: fermate2,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.3,
    strokeWeight: 2,
  });
 
 
 
 
  // creazione linea rossa dopo aver percorso un marker
  const fermate_percorso = [
    { lat: 45.466396217241524, lng: 9.197577245397706 }
  ]
 
  const bus1_percorso = new google.maps.Polyline({
    path: fermate_percorso,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
 
  // linea rossa viene impostato sulla mappa
  bus1.setMap(map);
  bus1_percorso.setMap(map);
 
 
 
 
 
 
 
  // creo una funzione con i che parte da 0 e continua con l'intervallo
 
  var i = 0;
  // funzione che muove il bus settando una nuova posizione nel marker_partenza
  function moveBus() {
    if(i < fermate2.length){
      marker_partenza.setPosition(new google.maps.LatLng(fermate2[i].lat, fermate2[i].lng));
      i++;
    }
    else{
      clearInterval(bus_interval);
    }
  }
  bus_interval = setInterval(moveBus, 1000);
  console.log(path);
}
window.initMap = initMap;
 
 
 
 
 
 
  //moveBus(marker_partenza);
 
 
  //changeMarkerPosition(marker_partenza);
 
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