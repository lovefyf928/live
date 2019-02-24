<?php
/**
 * Created by IntelliJ IDEA.
 * User: lovefyf
 * Date: 2018/7/2
 * Time: 10:32
 */
require_once ("../../../xuezi-project02-s/data/init.php");
@$kw = $_REQUEST["term"];
if ($kw != null) {
    $kws = explode(" ",$kw);
    for($i = 0 ; $i < count($kws) ; $i++) {
        $kws[$i] = "title like '%" . $kws[$i] . "%'";
    }
        $where = " where ".implode(" and ",$kws);
        $sql = "select title,sold_count from xz_laptop $where LIMIT 10";
        $result = mysqli_query($conn,$sql);
    echo(json_encode(mysqli_fetch_all($result,1)));

}