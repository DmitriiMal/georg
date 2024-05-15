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


$sql = "SELECT * FROM run_date WHERE id=(
  SELECT max(id) FROM run_date
  );";

$result = mysqli_query($connect, $sql);
$row = mysqli_fetch_assoc($result);

// Ensure that a row was fetched
if ($row) {
  // Format the date and time
  // $dateString = date("d. F Y", strtotime($row['DATE']));
  // $timeString = date("H.i", strtotime($row['DATE']));

  // Output the formatted date and time
  // echo $dateString . ', ' . $timeString . ' Uhr';
  echo $row['DATE'];
} else {
  // Handle case where no data is retrieved
  echo "No data found!";
}



// TO DO
// The date should be converted to this format
// echo "13. Mai 2024, 18.30 Uhr";
