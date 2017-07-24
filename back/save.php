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
  $sql = "insert into lottery (url,show_url,type,appid,updateAt,comment) values('$url','$show','$type','$appid','$time','$comment')";

  $result = mysql_query($sql,$con);

  if ($result)
      echo "1";
  else
      echo "2222222".$sql;
} else {
  echo json_encode(3);
}
