<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
  <link rel="stylesheet" href="/bus-simulator/css/style.css">
  <link rel="stylesheet" href="/bus-simulator/css/styleMap.css">


  <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
  <link rel="stylesheet" type="text/css" href="/bus-simulator/css/prova.css" />
  <link rel="stylesheet" href="/bus-simulator/css/finestra.css">
  <script type="module" src="/bus-simulator/js/gmaps.js"></script>

  <title>Bus Simulator</title>
</head>
<body id="body-pd">
  <header class="header" id="header">
    <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
    <div class="header_img" id="img-profilo"> <img src="/bus-simulator/img/token_1 (36).png" alt=""> </div>
    <div>
      <h5>Bus Simulator</h5>
    </div>
    <div class="container" id="search">
      <form class="d-flex">
        <input id="pac-input" class="form-control me-2 controls" type="search" placeholder="Dove ti trovi?"
          aria-label="Search">
      </form>
    </div>
  </header>

  <div class="l-navbar" id="nav-bar">
    <nav class="nav">
      <div> <a href="#" class="nav_logo"> <i class='bx bx-layer nav_logo-icon'></i> <span class="nav_logo-name">Bus
            Simulator</span> </a>
        <div class="nav_list"> <a href="#" class="nav_link active"> <i class='bx bx-grid-alt nav_icon'></i>
            <span class="nav_name">Maps</span></a>
          <a href="#" class="nav_link"> <i class='bx bx-bookmark nav_icon'></i> <span class="nav_name">Linea
              gialla</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-folder nav_icon'></i> <span class="nav_name">Linea
              rossa</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-bar-chart-alt-2 nav_icon'></i> <span class="nav_name">Linea
              verde</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-message-square-detail nav_icon'></i> <span
              class="nav_name">Orari</span> </a>
          <a href="/html/indextBiglietti.html" target="_blank" class="nav_link"> <i class='bx bx-user nav_icon'></i><span class="nav_name">Profilo</span></a>
        </div>
      </div> <a href="#" class="nav_link"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span>
      </a>
    </nav>

  </div>

  <!--Container Main start-->
  <div class="height-100 bg-light" id="gmappa">

    <div id="map">
    </div>
   

    <button id="open-modal-btn" hidden>Open Modal</button>

    <div id="modal" class="nascondi">
      <div id="primo">
          <button id="close-modal-btn">&times;</button>
          <br>
          <h2 class="white">Bus C20</h2>
      </div>
      <img src="/bus-simulator/img/linearossa.png" alt="" width="100%">

      <div id="secondo">
          <div id="partenza">
              <h3>Partenza</h3>
              <div id="terzo" class="white bg-black">
                  <p>Duomo</p>
              </div>
              
          </div>
          <div id="iconaFreccia">
              <i class="bi bi-arrow-right-square-fill"></i>
          </div>
          
          <div id="arrivo">
              <h3>Arrivo</h3>
              <div id="quarto" class="white bg-black">
                  <p>Cadorna</p>
              </div>
              
          </div>
      </div>

      <div id="quinto">
          <table>
              <tr>
                <td class="capoColonna">FERMATE</td>
                <td class="capoColonna">ORARI</td>
              </tr>
              <tr>
                <td>Duomo</td>
                <td>11.45</td>
              </tr>
              <tr>
                <td>Piazza Giulio</td>
                <td>11.50</td>
              </tr>
              <tr>
                <td>Vicolo Corto</td>
                <td>12.00</td>
              </tr>
              <tr>
                <td>Vicolo Stretto</td>
                <td>12.10</td>
              </tr>
              <tr>
                <td>Parco Vittoria</td>
                <td>12.15</td>
              </tr>
              <tr>
                <td>Stazione Nord</td>
                <td>12.26</td>
              </tr>
              <tr>
                <td>Cadorna</td>
                <td>12.34</td>
              </tr>
            </table>
      </div>

      <div id="sesto">
          <h3 class="white">Compra biglietto:</h3>
          <p class="white">2.50€</p>
          <i id="ticket" class="bi bi-cash-coin white"></i>
      </div>
      
    </div>

  <div id="overlay" class="nascondi"></div>
    <!-- 
           The `defer` attribute causes the callback to execute after the full HTML
           document has been parsed. For non-blocking uses, avoiding race conditions,
           and consistent behavior across browsers, consider loading using Promises
           with https://www.npmjs.com/package/@googlemaps/js-api-loader.
        -->
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD85hNMINjgwkDxCJFgZo7YNTJQR2tGNtU&libraries=geometry,places&callback=initMap&v=weekly"
      defer></script>

    <script src="/bus-simulator/js/finestra.js"></script>
  </div>

  <!--Container Main end-->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="/bus-simulator/js/script.js"></script>

</body>
</html>