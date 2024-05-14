<?php
$allowedOrigins = array(
  'http://127.0.0.1:5500',
  'https://lauftreff.netlify.app',
  'https://jugendlauftreff-wien.at'
);

$origin = $_SERVER['HTTP_ORIGIN'];

if (in_array($origin, $allowedOrigins)) {
  header("Access-Control-Allow-Origin: " . $origin);
}



$host = "localhost";
$user = "nffc8c5_dmal_not_del";
$pass = "JwgSmw3@kff6zcY";
$dbName = "nffc8c5_jugendlauftreff";

$connect = mysqli_connect($host, $user, $pass, $dbName);

if (!$connect) {
  echo "No connection";
}


echo "13. Mai 2024, 18.30 Uhr";
