<?php
  $username = $_REQUEST['username'];
  $password = $_REQUEST['password'];
  $email = $_REQUEST['email'];
  $phone = $_REQUEST['phone'];
  $address = $_REQUEST['address'];
  $sex = $_REQUEST['sex'];

  include('./conn.php');

  $selectPhone = "select * from user where phone='$phone'";

  $res = $conn->query($selectPhone);

  if($res->num_rows>0){
    echo '<script>alert("注册失败,用户名已经存在");</script>';
    echo '<script>location.href="../src/register.html";</script>';
    die();
  }

  $insertUser = "insert into user (username,password,email,phone,address,sex) values ('$username','$password','$email','$phone','$address','$sex')";

  $inserted = $conn->query($insertUser);

  if($insertUser){
    echo '<script>alert("注册成功");</script>';
    echo '<script>location.href="../src/login.html";</script>';
  }

?>