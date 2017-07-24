<?php

include 'conn.php';

$del = file_get_contents('php://input');
$del = explode(',',$del);

$del_id = $del[0];

// 防止全局变量造成安全隐患
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
  $sql = "delete from lottery where id = '$del_id'";

  $result = mysql_query($sql,$con);

  if ($result)
      echo "1";
  else
      echo "2222222".$sql;
}else{
    echo json_encode(3);
}
