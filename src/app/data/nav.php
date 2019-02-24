<?php
/**
 * Created by IntelliJ IDEA.
 * User: root
 * Date: 18-8-23
 * Time: 上午8:58
 */
require ('heder.php');
require ('init.php');
$sql = 'select banner,people from bg';
$res = mysqli_query($conn,$sql);
$data = mysqli_fetch_all($res,MYSQLI_ASSOC);
echo (json_encode(array("msg"=>$data)));
