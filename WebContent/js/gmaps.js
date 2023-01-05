// import della funzione "apri popup" preso dal file esterno
import { openModal } from "./finestra.js";


// Funzione che fa partire maps
function initMap() {
  // La mappa che centra la posizione di partenza
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 45.466396217241524, lng: 9.197577245397706 },
    // stili per rimuovere punti di interesse sulla mappa
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'transit.station',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'transit.station.rail',
        stylers: [{ visibility: 'off' }]
      }
    ]
  });

  // Creazione del marker "partenza" bus rosso
  var marker_partenza = new google.maps.Marker({
    position: { lat: 45.466396217241524, lng: 9.197577245397706 },
    map: map,
    icon: {
      url: "../img/BusRosso.png",
      scaledSize: new google.maps.Size(50, 50), // Set the size of the marker image
      origin: new google.maps.Point(0, 0), // Set the origin point of the image
      anchor: new google.maps.Point(20, 20), // Set the anchor point for the image
      rotation: 45,
    }
  });

console.log(marker_partenza.getPosition());

  // Creazione array di markers per bus rosso
  var markerFermateRossa = [
    new google.maps.Marker({
      position: { lat: 45.46642621575427, lng: 9.197590291846295 },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: { lat: 45.465970429025646, lng: 9.197093688085612 },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: { lat: 45.46553707660491, lng: 9.195870511609105 },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: { lat: 45.464676209169134, lng: 9.192768826757328 },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: { lat: 45.463736621920305, lng: 9.192762447353758 },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: { lat: 45.463172852573805, lng: 9.187569061380524 },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: { lat: 45.463744354266986, lng: 9.18833490737487 },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: { lat: 45.46151936554318, lng: 9.185425894160376 },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: { lat: 45.46070923231423, lng: 9.18295840693557 },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: { lat: 45.460609461407735, lng: 9.182101140026067 },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: { lat: 45.460709283843826, lng: 9.180005835947252 },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: { lat: 45.46041508453437, lng: 9.177918175924725 },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: { lat: 45.46097775336577, lng: 9.175658272061987 },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: { lat: 45.46200737094371, lng: 9.174485216234782 },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
  ]

  //Creazione di un semplice array con le cordinate dei markers fermate rosse
  const percorsolineaRossa = [
    { lat: 45.46637089591075, lng: 9.197580963285544 },
    { lat: 45.466309728348, lng: 9.197553345518646 },
    { lat: 45.46626262514919, lng: 9.197495411609196 },
    { lat: 45.46618368375375, lng: 9.19736782636337 },
    { lat: 45.4661223543956, lng: 9.197273407581314 },
    { lat: 45.465970429025646, lng: 9.197093688085612 },
    { lat: 45.46576091443667, lng: 9.196541090328681 },
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
    { lat: 45.46359925325846, lng: 9.188519041849123 },
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
  var fermateLineaRossa = new google.maps.Polyline({
    path: percorsolineaRossa,
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
  fermateLineaRossa.setMap(map);



  /////////////////////////////////////////////////////////////

  // Linea gialla

  // Creazione del marker "partenza" bus giallo

  var marker_partenza2 = new google.maps.Marker({
    position: { lat: 45.451844389509844, lng: 9.201601530134223 },
    map: map,
    icon: {
      url: "../img/BusGiallo.png",
      scaledSize: new google.maps.Size(50, 50), // Set the size of the marker image
      origin: new google.maps.Point(0, 0), // Set the origin point of the image
      anchor: new google.maps.Point(20, 20), // Set the anchor point for the image
    },
  });

  //marker linea gialla
  var fermateLineaGialle = [
    new google.maps.Marker({
      position: {
        lat: 45.451844389509844, lng: 9.201601530134223
      },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: {
        lat: 45.45391795245989, lng: 9.19936584138739
      },
      map: map,
      icon: {
        url: "/img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: {
        lat: 45.4555831395381, lng: 9.199460490263109
      },
      map: map,
      icon: {
        url: "/img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: {
        lat: 45.45793226629686, lng: 9.198975951892331
      },
      map: map,
      icon: {
        url: "/img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: {
        lat: 45.46259210281532, lng: 9.197673919877866
      },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: {
        lat: 45.46390088399996, lng: 9.1976176989637024
      },
      map: map,
      icon: {
        url: "/img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: {
        lat: 45.465763724564745, lng: 9.198834990777685
      },
      map: map,
      icon: {
        url: "/img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: {
        lat: 45.466798031167045, lng: 9.198228171178425
      },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: {
        lat: 45.46723532302577, lng: 9.196425814830047
      },
      map: map,
      icon: {
        url: "/img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: {
        lat: 45.468571870524094, lng: 9.194866805902263
      },
      map: map,
      icon: {
        url: "/img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: {
        lat: 45.469737223849805, lng: 9.19332568752798
      },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
    new google.maps.Marker({
      position: {
        lat: 45.47130545525693, lng: 9.194028322031231
      },
      map: map,
      icon: {
        url: "../img/Fermata.png",
        scaledSize: new google.maps.Size(12, 12), // Set the size of the marker image
        origin: new google.maps.Point(0, 0), // Set the origin point of the image
        anchor: new google.maps.Point(0, 0), // Set the anchor point for the image
      },
    }),
  ]

  //cordinate marker linea gialla
  const percorsolineaGialla = [
    { lat: 45.451844389509844, lng: 9.201601530134223 },
    { lat: 45.45203927539382, lng: 9.201481879608277 },
    { lat: 45.4522699496956, lng: 9.20178765902762 },
    { lat: 45.452413218617764, lng: 9.20197827516814 },
    { lat: 45.45254693595011, lng: 9.201610658325711 },
    { lat: 45.45391795245989, lng: 9.19936584138739 },
    { lat: 45.45455797483495, lng: 9.19834332111271 },
    { lat: 45.4546654222014, lng: 9.19813908953358 },
    { lat: 45.45477286936313, lng: 9.198455648481227 },
    { lat: 45.45488747944331, lng: 9.198891342516701 },
    { lat: 45.455004476997246, lng: 9.199599345330306 },
    { lat: 45.4555831395381, lng: 9.199460490263109 },
    { lat: 45.45793226629686, lng: 9.198975951892331 },
    { lat: 45.46093540008834, lng: 9.198537436135597 },
    { lat: 45.46134788492449, lng: 9.198467396726791 },
    { lat: 45.462279636142334, lng: 9.19830855681517 },
    { lat: 45.46231277584294, lng: 9.198174875631016 },
    { lat: 45.46243967647215, lng: 9.19790981810895 },
    { lat: 45.46259210281532, lng: 9.197673919877866 },
    { lat: 45.46281173300129, lng: 9.19727790268314 },
    { lat: 45.462923747743645, lng: 9.197035454122355 },
    { lat: 45.46299366207233, lng: 9.197098592081222 },
    { lat: 45.463173945259825, lng: 9.197135045710365 },
    { lat: 45.463204472314445, lng: 9.197175581695985 },
    { lat: 45.46322516565711, lng: 9.197202403785704 },
    { lat: 45.463261860088544, lng: 9.197241890594734 },
    { lat: 45.463427938273085, lng: 9.197358917517686 },
    { lat: 45.46349562134258, lng: 9.197398031024823 },
    { lat: 45.46353371570255, lng: 9.197419488696598 },
    { lat: 45.46390088399996, lng: 9.1976176989637024 },
    { lat: 45.464388549169605, lng: 9.197927543111351 },
    { lat: 45.4646307497829, lng: 9.198084452338835 },
    { lat: 45.464797232705976, lng: 9.198166259713423 },
    { lat: 45.46499146216196, lng: 9.19822325665498 },
    { lat: 45.46507423286557, lng: 9.198221244998328 },
    { lat: 45.4654147201583, lng: 9.198185035177163 },
    { lat: 45.465642807874715, lng: 9.198179000206409 },
    { lat: 45.465757556807965, lng: 9.198270865864435 },
    { lat: 45.465780600622715, lng: 9.198335238879759 },
    { lat: 45.465778719495326, lng: 9.198556521119933 },
    { lat: 45.46577072470357, lng: 9.198852905218079 },
    { lat: 45.4657575568086, lng: 9.199339726153836 },
    { lat: 45.46606465014436, lng: 9.199249872155484 },
    { lat: 45.466205083680954, lng: 9.199214335998917 },
    { lat: 45.46654448074038, lng: 9.1991200504453 },
    { lat: 45.466788062655034, lng: 9.199074831863976 },
    { lat: 45.466798031167045, lng: 9.198228171178425 },
    { lat: 45.4667872185245, lng: 9.197996052894807 },
    { lat: 45.4668417207498, lng: 9.197622366583593 },
    { lat: 45.466866072792406, lng: 9.196795626952087 },
    { lat: 45.466970438565056, lng: 9.196721220384076 },
    { lat: 45.46723532302577, lng: 9.196425814830047 },
    { lat: 45.46817605390896, lng: 9.195305401336832 },
    { lat: 45.468571870524094, lng: 9.194866805902263 },
    { lat: 45.46901370761017, lng: 9.19434762035417 },
    { lat: 45.46942260501503, lng: 9.193822629525256 },
    { lat: 45.469737223849805, lng: 9.19332568752798 },
    { lat: 45.47005910709034, lng: 9.192783474924463 },
    { lat: 45.470763271276695, lng: 9.193503243825472 },
    { lat: 45.47130545525693, lng: 9.194028322031231 },
  ]

  const fermate_percorso2 = [
    { lat: 45.451844389509844, lng: 9.201601530134223 }
  ]

  // Creazione linea gialla trasparente di tutto il tragitto
  const busGiallo = new google.maps.Polyline({
    path: percorsolineaGialla,
    geodesic: true,
    strokeColor: "#FFA500",
    strokeOpacity: 0.5,
    strokeWeight: 3,
    map: map,
  });
  var fermateLineaRossa_percorso = new google.maps.Polyline({
    path: fermate_percorso,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
    map: map
  });
  // creo una funzione con i che parte da 0 e continua con l'intervallo
  var i = 0;
  // funzione che muove il bus settando una nuova posizione nel marker_partenza
  function moveBusRed() {
    if (i < percorsolineaRossa.length) {
      marker_partenza.setPosition(new google.maps.LatLng(percorsolineaRossa[i].lat, percorsolineaRossa[i].lng));
      fermate_percorso.push(percorsolineaRossa[i]);
      // creo una variabile che crea una polinea e si aggiorna man mano che il marker si muove
      fermateLineaRossa_percorso.setPath(fermate_percorso);
      i++;

    }
    else {
      clearInterval(bus_interval_red);
    }
  }

  var i2 = 0;
  function moveBusYellow() {
    if (i2 < percorsolineaGialla.length) {
      marker_partenza2.setPosition(new google.maps.LatLng(percorsolineaGialla[i2].lat, percorsolineaGialla[i2].lng));
      fermate_percorso2.push(percorsolineaGialla[i2]);
      // creo una variabile che crea una polinea e si aggiorna man mano che il marker si muove
      var fermateLineaGialla_percorso = new google.maps.Polyline({
        path: fermate_percorso2,
        geodesic: true,
        strokeColor: "#FFA500",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      fermateLineaGialla_percorso.setMap(map);
      i2++;
    }
    else {
      clearInterval(bus_interval_yellow);
    }
  }

  // funzione che quando clicchi una fermata o pullman esce un popup informazioni
  markerFermateRossa[0].addListener("click", openModal);
  markerFermateRossa[1].addListener("click", openModal);
  marker_partenza.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
  marker_partenza2.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);

  var bus_interval_red = setInterval(moveBusRed, 1000);
  var bus_interval_yellow = setInterval(moveBusYellow, 1000);


  ////////////////////////////////CHECK BOX
 this.checkbox = [
    function Rosso() {
      let red = document.getElementById("Rosso");
      let temp = markerFermateRossa;

      if (red.checked) {
        fermateLineaRossa_percorso.setVisible(true);
        marker_partenza.setVisible(true);
        fermateLineaRossa.setVisible(true);
        markerFermateRossa.forEach(function (n) {
          n.setVisible(true);
        })
      }
      else {
        fermateLineaRossa_percorso.setVisible(false);
        marker_partenza.setVisible(false);
        fermateLineaRossa.setVisible(false);
        markerFermateRossa.forEach(function (n) {
          n.setVisible(false);
        })

      }
    },
    function Giallo() {
      alert("rosso")
    },
    function Verde() {

    },
    function Blu() {

    }
  ]
}
// fa partire la mappa di google all'avvio della pagina
window.initMap = initMap;



  //moveBusRed(marker_partenza);


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

/// DA RIVEDERE
/*var bus_prova = new google.maps.Marker({
 position: percorsolineaRossa[1],
 map: map,
 icon: {
   url: "/img/BusRosso.png",
   scaledSize: new google.maps.Size(40, 40), // Set the size of the marker image
   origin: new google.maps.Point(0, 0), // Set the origin point of the image
   anchor: new google.maps.Point(20, 20) // Set the anchor point for the image  
 }
});

bus_prova.set("distance", 0);

var interval = setInterval(function() {
var distance = bus_prova.get("distance");
var point = fermateLineaRossa.getPointAtDistance(distance);
bus_prova.setPosition(point);
bus_prova.set("distance", distance + 10); // Increase the distance by 10 meters
}, 50); // 50 milliseconds = 50ms*/