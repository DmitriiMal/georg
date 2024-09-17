<?php

// Allowed Origins
$allowedOrigins = array(
  '',
  '',
  '',
  '',
  ''
);

$origin = $_SERVER['HTTP_ORIGIN'];

if (in_array($origin, $allowedOrigins)) {
  header("Access-Control-Allow-Origin: " . $origin);
}

// Database Connection
$host = "";
$user = "";
$pass = "";
$dbName = "";

$connect = mysqli_connect($host, $user, $pass, $dbName);

if (!$connect) {
  echo "No connection";
}
