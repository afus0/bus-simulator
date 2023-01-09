<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Acquista biglietto</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="/bus-simulator/css/styleBiglietti.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
</head>

<body>


    <div id="titolo" class="container">
        <h2>Acquista il tuo biglietto</h2>
    </div>

    <div id="padre" class="container">
        <div class="row">
            <div id="parteSinistra" class="col-6">

            </div>

            <div class="col-6">
                <div id="parteDestra" class="container">
                    <select id="tariffa" class="form-select" aria-label="Default select example">
                        <option selected>Seleziona tariffa..</option>
                        <option value="1">Biglietto unica corsa 2.50€</option>
                        <option value="2">Biglietto giornaliero 5.50€</option>
                        <option value="3">Biglioetto settimanale 14.00€</option>
                        <option value="3">biglietto mensile 40.50€</option>
                    </select>


                    <div class="card my-4 p-3">
                        <div class="row main">
                            <div class="col-12"><span>Carrello</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>Conferma d'acquisto</span>&nbsp;&nbsp;&nbsp;&nbsp;<span></span></div>
                        </div>

                        <div class="row justify-content-center mrow">
                            <div class="col-12">
                                <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" width="35px"
                                    height="35px" />
                                <img src="https://img.icons8.com/color/48/000000/visa.png" width="35px" height="35px" />
                                <img src="https://img.icons8.com/color/48/000000/paypal.png" width="35px"
                                    height="35px" />
                            </div>
                        </div>
                        <form class="form-card" method="post" action="/bus-simulator/Acquista">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <input type="number" class="form-control p-0" id="number" required name="numero"><label
                                            class="form-control-placeholder p-0" for="number">Numero di carta</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control p-0" id="name" name="name" required><label
                                            class="form-control-placeholder p-0" for="name">Titolare</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4 col-12">
                                    <div class="form-group">
                                        <input type="number" class="form-control p-0" id="sdate" name="data" required><label
                                            class="form-control-placeholder p-0" for="sdate">Emessa</label>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control p-0" id="expdate" required name="scadenza"><label
                                            class="form-control-placeholder p-0" for="expdate" >Scadenza</label>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-12">
                                    <div class="form-group">
                                        <input type="number" class="form-control p-0" id="passw" required name="cvv"><label
                                            class="form-control-placeholder p-0" for="passw" >CVV</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row lrow mt-4 mb-3">
                                <div class="col-sm-8 col-12">
                                    <h3>Totale</h3>
                                </div>
                                <div class="col-sm-4 col-12">
                                    <h5>2,5€</h5>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-sm-12">
                                    <button type="submit" class="btn btn-primary btn-block">Acquista</button>
                                </div>
                            </div>

                        </form>

                    </div>
                    <i id="icon" class="bi bi-cash-coin"></i>

                    <div id="padre-tutela">
                        <h6 id="tutela">Bus Simulator SPA protegge la privacy e la sicurezza dei dati con misure di
                            sicurezza rigorose e conformi alle leggi sulla protezione dei dati.</h6>
                    </div>
                </div>

            </div>
        </div>

    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"></script>
</body>

</html>