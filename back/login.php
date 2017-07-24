<?php

ini_set('display_errors', true);
error_reporting(E_ALL);
include 'conn.php';



$sql = "select * from admin";
$result = mysql_query($sql,$con);
