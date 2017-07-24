<?php

include 'conn.php';

$add = file_get_contents('php://input');
$add = explode(',',$add);

$url = (string)$add[2];
$show = (int)$add[3];
$type = (string)$add[1];
$appid = (string)$add[0];
$comment = (string)$add[4];

$time=date("Y-m-d H:i:s");

$sql = "insert into lottery (url,show_url,type,appid,updateAt,comment) values('$url','$show','$type','$appid','$time','$comment')";

$result = mysql_query($sql,$con);

if ($result)
    echo "1";
else
    echo "2222222".$sql;