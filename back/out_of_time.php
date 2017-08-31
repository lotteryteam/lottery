<?php

ini_set('display_errors', true);
error_reporting(E_ALL);

//include 'Util.php';
//include 'entityTables.php';
include 'conn.php';

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

if($admin == true){
  // 未超时
  echo json_encode(1);
} else {
  // 登陆超时
  echo json_encode(0);
}
