<?php

// Allowed Origins
$allowedOrigins = array(
  'http://127.0.0.1:5500',
  'http://localhost:3000/run-date.php',
  'http://localhost/georg/run-date.php',
  'https://lauftreff.netlify.app',
  'https://jugendlauftreff-wien.at'
);

$origin = $_SERVER['HTTP_ORIGIN'];

if (in_array($origin, $allowedOrigins)) {
  header("Access-Control-Allow-Origin: " . $origin);
}

// Database Connection
$host = "localhost";
$user = "nffc8c5_dmal_not_del";
$pass = "JwgSmw3@kff6zcY";
$dbName = "nffc8c5_jugendlauftreff";

$connect = mysqli_connect($host, $user, $pass, $dbName);

if (!$connect) {
  echo "No connection";
}

if (isset($_POST['datetime'])) {
  $datetime = mysqli_real_escape_string($connect, $_POST['datetime']);

  $querry = "INSERT INTO `run_date`(`DATE`) VALUES ('$datetime')";

  if (mysqli_query($connect, $querry)) {
    echo "The date has been changed!";
  } else {
    echo "Something went wrong :(";
  }
} else {
  echo 'no request';
}


// var_dump($datetime);
