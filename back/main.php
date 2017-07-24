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
// else {
// // 验证失败，将 $_SESSION["admin"] 置为 false
//     $_SESSION["admin"] = false;
// }

if($admin == true){
    $sql = "select * from lottery";
    $result = mysql_query($sql,$con);
    $array = new ArrayObject(new ArrayObject());
    $i = 0;

    while($row = mysql_fetch_array($result)){
        $array[$i][0] = $row[0]; //id
        $array[$i][1] = $row[1]; //url
        $array[$i][2] = $row[2]; //type
        $array[$i][3] = $row[3]; //show_url
        $array[$i][4] = $row[4]; //appid
        $array[$i][5] = $row[5]; //comment
        $array[$i][6] = $row[6]; //create
        $array[$i][7] = $row[7]; //update
        $i++;
    }

    echo json_encode($array);
}else{
    echo json_encode(3);
}
