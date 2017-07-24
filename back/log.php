<?php

class Log{

    public $myFile = null;

    function __construct()
    {    // 构造函数
        $this->myFile = fopen("log.txt", "w") or die("Unable to open file!");
    }

    function write($logContents){
        fwrite($this->myFile, (string)$logContents);
    }

    function close(){
        fclose($this->myFile);
    }


}