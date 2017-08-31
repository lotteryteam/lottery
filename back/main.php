<?php

ini_set('display_errors', true);
error_reporting(E_ALL);

//include 'Util.php';
//include 'entityTables.php';
include 'conn.php';

// 防止全局变量造成安全隐患
// $admin = false;
// // 启动会话，这步必不可少
// session_start();
//
// if(!isset($_SESSION['last_access']) || (time()-$_SESSION['last_access'])>1200)
// {
//   unset($_SESSION['admin']);
// } else {
//    $_SESSION['last_access'] = time();
// }
//
// // 判断是否登陆
// if (isset($_SESSION['admin']) && $_SESSION['admin'] === true) {
//     $admin = true;
// }

// $admin = true;
// echo $admin;
// if($admin == true){
//   echo "admin";
//
// }else{
//     echo json_encode(0);
// }

echo "jjj";

if (isset($_GET["limit"]) && isset($_GET["offset"])) {
  echo "kkk";
  $limit = $_GET['limit'];
  $offset = $_GET['offset'];
  $start = $offset * $limit;
  $sql = "select * from lottery limit $offset,$limit";
  $sql_all_count = "select count(*) from lottery";
  $result = mysql_query($sql, $con);
  $array = new ArrayObject(new ArrayObject());
  $i = 0;

  echo $limit;
  echo $offset;

  while($row = mysql_fetch_array($result)){
      $array[$i]["id"] = $row[0]; //id
      $array[$i]["url"] = $row[1]; //url
      $array[$i]["type"] = $row[2]; //type
      $array[$i]["show_url"] = $row[3]; //show_url
      $array[$i]["appid"] = $row[4]; //appid
      $array[$i]["comment"] = $row[5]; //comment
      $array[$i]["create"] = $row[6]; //create
      $array[$i]["update"] = $row[7]; //update
      $i++;
  }

  $result_count = mysql_query($sql_all_count, $con);
  $row_count = mysql_fetch_array($result_count)
  $all_count = $row_count[0];

  $json = array("total" => $all_count, "rows" => $array);
  echo json_encode($json)
} else {
   echo json_encode(-1);
}
