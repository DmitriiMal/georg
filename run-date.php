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



// header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
// header("Access-Control-Allow-Origin: https://lauftreff.netlify.app");
// header("Access-Control-Allow-Origin: *");

// $host = "localhost";
// $user = "root";
// $pass = "";
// $dbName = "";

// $connect = mysqli_connect($host, $user, $pass, $dbName);

// if (!$connect) {
//   echo "No connection";
// }

echo "13. Mai 2024, 18.30 Uhr";
