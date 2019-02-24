<?php
/**
 * Created by IntelliJ IDEA.
 * User: root
 * Date: 18-8-22
 * Time: 下午7:59
 */
require ('heder.php');
$pid = $_REQUEST['pid'];
require ('init.php');
$sql = 'select live,Liveanchor,banner,people,Headportrait,gameclass,title,detail from bg where pid='.$pid;
$res = mysqli_query($conn,$sql);
$data = mysqli_fetch_all($res,MYSQLI_ASSOC);
echo (json_encode(array("msg"=>$data)));
