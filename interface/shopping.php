<?php
  include('./conn.php');

  $id = $_REQUEST['id'];

  $sql = "select * from product where id in ($id)";

  $res = $conn->query($sql);

  $arr = [];

  while($row = $res->fetch_assoc()){
    array_push($arr,$row);
  }

  echo json_encode($arr);
?>