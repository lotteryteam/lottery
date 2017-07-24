<?php

include 'conn.php';

$del = file_get_contents('php://input');
$del = explode(',',$del);

$del_id = $del[0];

$sql = "delete from lottery where id = '$del_id'";

$result = mysql_query($sql,$con);

if ($result)
    echo "1";
else
    echo "2222222".$sql;