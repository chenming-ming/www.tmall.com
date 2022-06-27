<?php
  $username = $_REQUEST['username'];
  $password = $_REQUEST['password'];

  include('./conn.php');

  $select = "select * from user where username='$username' and password='$password'";

  $res = $conn->query($select);
  // var_dump($res);

  if($res->num_rows>0){
    echo '<script>alert("登录成功");</script>';
    echo '<script>location.href="../src/index.html";</script>';
  }else{
    echo '<script>alert("登录失败");</script>';
    echo '<script>location.href="../src/register.html";</script>';
  }
?>