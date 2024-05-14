<?php

// Allowed Origins
$allowedOrigins = array(
  'http://127.0.0.1:5500',
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

// $sql = "SELECT * 
// FROM run_date 
// WHERE id=(
//     SELECT max(id) FROM run_date
//     )";
$sql = "SELECT YEAR(DATE) AS Year, MONTH(DATE) AS Month, DAY(DATE) AS Day, HOUR(DATE) AS Hour, MINUTE(DATE) AS Minute FROM run_date WHERE id=(
  SELECT max(id) FROM run_date
  );";

$result = mysqli_query($connect, $sql);
$result = mysqli_fetch_assoc($result);


echo "$result[Day].$result[Month].$result[Year], $result[Hour].$result[Minute] Uhr";

// echo "13. Mai 2024, 18.30 Uhr";


// Example: If you want to create a custom date format such as DD Month YYYY, you could use:
//   SELECT FORMAT(GETDATE(), 'dd ') + DATENAME(MM, GETDATE()) + FORMAT(GETDATE(), ' yyyy') AS CustomDateFormat;