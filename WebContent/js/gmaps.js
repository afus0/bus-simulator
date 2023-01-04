// import della funzione "apri popup" preso dal file esterno
import { openModal } from "./finestra.js";


// Funzione che fa partire maps
function initMap() {
  // Posizione di partenza 
  var position = [45.466396217241524, 9.197577245397706];
  const partenza = { lat: position[0], lng: position[1] };
  // La mappa che centra la posizione di partenza
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: partenza,
    // stili per rimuovere punti di interesse sulla mappa
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'transit.station',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'transit.station.rail',
        stylers: [{visibility: 'off'}]
      }
    ]
  });
  
  // Creazione del marker "partenza"
  var marker_partenza = new google.maps.Marker({
    position: partenza,
    map: map,
    icon: {
      url: "/img/BusGiallo.png",
    }
  });
 
  // Creazione array di markers
  var fermate = [
    new google.maps.Marker({
      position: { lat: 45.46642621575427, lng: 9.197590291846295 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.465970429025646, lng: 9.197093688085612 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46553707660491, lng: 9.195870511609105 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.464676209169134, lng: 9.192768826757328 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.463736621920305, lng: 9.192762447353758 },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat: 45.463172852573805, lng: 9.187569061380524 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.463744354266986, lng: 9.18833490737487 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46151936554318, lng: 9.185425894160376 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46070923231423, lng: 9.18295840693557 },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat: 45.460609461407735, lng: 9.182101140026067 },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat: 45.460709283843826, lng: 9.180005835947252 },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat: 45.46041508453437, lng: 9.177918175924725 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46097775336577, lng: 9.175658272061987 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46200737094371, lng: 9.174485216234782 },
      map: map
    }),
  ]

  //Creazione di un semplice array con le cordinate dei markers di riga  21;
  const fermate2 = [
    { lat: 45.46637089591075, lng: 9.197580963285544 },
    { lat:  45.466309728348, lng: 9.197553345518646 },
    { lat: 45.46626262514919, lng:  9.197495411609196 },
    { lat: 45.46618368375375, lng: 9.19736782636337 },
    { lat: 45.4661223543956, lng: 9.197273407581314  },
    { lat: 45.465970429025646, lng: 9.197093688085612 },
    { lat: 45.46576091443667, lng: 9.196541090328681  },
    { lat: 45.46553707660491, lng: 9.195870511609105 },
    { lat: 45.464676209169134, lng: 9.192768826757328 },
    { lat: 45.463736621920305, lng: 9.192762447353758 },
    { lat: 45.46370857478336, lng: 9.192106021426346 },
    { lat: 45.46370857478336, lng: 9.192106021426346 }, 
    { lat: 45.4637080034064, lng: 9.191324739034954 },
    { lat: 45.46369847999813, lng: 9.190702604520238 },
    { lat: 45.46369989089575, lng: 9.190475287309875 },
    { lat: 45.463725445007555, lng: 9.190251929579766 },
    { lat: 45.46373296979117, lng: 9.190023271262234 },
    { lat: 45.46373249949252, lng: 9.189789248524116 },
    { lat: 45.46373873132188, lng: 9.188546733646746 },
    { lat: 45.46359925325846, lng:  9.188519041849123 },
    { lat: 45.463744354266986, lng: 9.18833490737487 },
    { lat: 45.463172852573805, lng: 9.187569061380524 },
    { lat: 45.46258489251683, lng: 9.186840763897408 },
    { lat: 45.46210733672218, lng: 9.186300230545525 },
    { lat: 45.46151936554318, lng: 9.185425894160376 },
    { lat: 45.46115516037292, lng: 9.184946282464294 },
    { lat: 45.460926562255906, lng: 9.184407436176588 },
    { lat: 45.46079969111861, lng: 9.18388395172825 },
    { lat: 45.46070923231423, lng: 9.18295840693557 },
    { lat: 45.460609461407735, lng: 9.182101140026067 },
    { lat: 45.46048611761392, lng: 9.181693489063175 },
    { lat: 45.46025664335839, lng: 9.181317960650102 },
    { lat: 45.46012294923142, lng: 9.181008813541382 },
    { lat: 45.460614293891815, lng: 9.18032590380889 },
    { lat: 45.460709283843826, lng: 9.180005835947252 },
    { lat: 45.46076379063649, lng: 9.179623328051957 },
    { lat: 45.46041508453437, lng: 9.177918175924725 },
    { lat: 45.46043551862174, lng: 9.177611086015215 },
    { lat: 45.46082529049958, lng: 9.176361221208307 },
    { lat: 45.46097775336577, lng: 9.175658272061987 },
    { lat: 45.46137336107004, lng: 9.174842038122126 },
    { lat: 45.46171656760763, lng: 9.174557546858182 },
    { lat: 45.46200737094371, lng: 9.174485216234782 },
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


  // linea rossa viene impostato sulla mappa
  bus1.setMap(map);

  // creo una funzione con i che parte da 0 e continua con l'intervallo

  var i = 0;
  // funzione che muove il bus settando una nuova posizione nel marker_partenza
  function moveBus() {
    if (i < fermate2.length) {
      marker_partenza.setPosition(new google.maps.LatLng(fermate2[i].lat, fermate2[i].lng));
      fermate_percorso.push(fermate2[i]);
      // creo una variabile che crea una polinea e si aggiorna man mano che il marker si muove
      var bus1_percorso = new google.maps.Polyline({
        path: fermate_percorso,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      bus1_percorso.setMap(map);
      i++;
    }
    else {
      clearInterval(bus_interval);
    }
  }

  // funzione che quando clicchi una fermata o pullman esce un popup informazioni
  fermate[0].addListener("click", openModal);
  fermate[1].addListener("click", openModal);
  marker_partenza.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
  var bus_interval = setInterval(moveBus, 1000);
}

// fa partire la mappa di google all'avvio della pagina
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