<?php

require_once("db_connection.php");

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
mysqli_close($connect);
