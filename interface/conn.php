<?php
  header('content-type:text/html;charset=utf-8');

  $mysql_conf = array(
    'host'=>'localhost:3306',
    'user'=>'root',
    'pass'=>'root',
    'db'=>'chenmm'
  );

  $conn = @new mysqli($mysql_conf['host'],$mysql_conf['user'],$mysql_conf['pass']);

  if($conn->$connect_error){
    die('连接错误'.$conn->connect_errno);
  }
  
  $conn->query('set names utf-8');

  $selected = $conn->select_db($mysql_conf['db']);

  if(!$selected){
    die('数据库连接失败'.$conn->error);
  }
  
?>