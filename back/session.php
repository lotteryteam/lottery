<?php

$se = file_get_contents('php://input');
$se = (int)$se;
if($se == 0){
    // 设置session声明周期
    $lifeTime = 3600;
    session_set_cookie_params($lifeTime);

//启动session
    session_start();

    $_SESSION['admin'] = true;

    echo json_encode(1);
}else{
    echo json_encode(2);
}
