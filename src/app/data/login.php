<?php
/**
 * Created by IntelliJ IDEA.
 * User: 11369
 * Date: 2018/10/16
 * Time: 23:56
 */
ini_set("display_errors","On");
error_reporting(E_ALL | E_STRICT);
require_once ("heder.php");
require_once ("init.php");
$phone = $_REQUEST['phone'];
$pwd = $_REQUEST['pwd'];
$sql = "SELECT count(uid) FROM `user` WHERE phone='$phone' AND pwd='$pwd'";
$res = mysqli_query($conn,$sql);
if (mysqli_num_rows($res) >= 1){
  echo 1;
}
else {
  echo 0;
}
