<?php

ini_set('display_errors', true);
error_reporting(E_ALL);

include 'conn.php';
$username = $_GET['username'];
$pass = $_GET['pass'];

$sql = "select * from admin where username = '$username' and password = '$pass'";
$result = mysql_query($sql);
if (mysql_num_rows($result) == 0) {
  echo "1";
} else {
  echo '0';
}
