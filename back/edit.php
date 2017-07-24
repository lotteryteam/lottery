<?php

include 'conn.php';
include 'log.php';

$modify = file_get_contents('php://input');
$modify = explode(',',$modify);

$id = $modify[0];
$url = (string)$modify[1];
$show = (int)$modify[2];
$type = (string)$modify[4];
$appid = (string)$modify[3];
$comment = (string)$modify[5];

$time=date("Y-m-d H:i:s");

$sql = "UPDATE lottery SET url='$url', show_url='$show', type='$type', appid='$appid' ,updateAt='$time' ,comment='$comment' WHERE id='$id'";

$result = mysql_query($sql,$con);

if ($result)
    echo "1";
else
    echo "2222222".$sql;


