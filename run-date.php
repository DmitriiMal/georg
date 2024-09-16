<?php

require_once("db_connection.php");


$sql = "SELECT * FROM run_date WHERE id=(
  SELECT max(id) FROM run_date
  );";

$result = mysqli_query($connect, $sql);
$row = mysqli_fetch_assoc($result);

// Ensure that a row was fetched
if ($row) {

  echo $row['DATE'];
} else {
  // Handle case where no data is retrieved
  echo "No data found!";
}
mysqli_close($connect);
