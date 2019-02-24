<?php
/**
 * Created by IntelliJ IDEA.
 * User: root
 * Date: 18-8-22
 * Time: 下午12:02
 */
require ("heder.php");
require ("init.php");
$sql = 'select url,title,viewers from gameimgs';
$res = mysqli_query($conn,$sql);
$data = mysqli_fetch_all($res,MYSQLI_ASSOC);
echo (json_encode(array("msg"=>$data)));
