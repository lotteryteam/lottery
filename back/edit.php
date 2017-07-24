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

$admin = false;
// 启动会话，这步必不可少
session_start();

if(!isset($_SESSION['last_access']) || (time()-$_SESSION['last_access'])>1200)
{
  unset($_SESSION['admin']);
} else {
   $_SESSION['last_access'] = time();
}

// 判断是否登陆
if (isset($_SESSION['admin']) && $_SESSION['admin'] === true) {
    $admin = true;
}

if ($admin == true) {
  $sql = "UPDATE lottery SET url='$url', show_url='$show', type='$type', appid='$appid' ,updateAt='$time' ,comment='$comment' WHERE id='$id'";

  $result = mysql_query($sql,$con);

  if ($result)
      echo "1";
  else
      echo "2222222".$sql;
} else {
  echo json_encode(3);
}
