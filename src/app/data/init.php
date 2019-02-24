<?php
$db_host = 'localhost';
$db_user = 'root';
$db_password = '!XCSfyf9872660601!';
$db_database = 'twitch';
$db_port = 3306;
$db_charset = 'UTF8';

$conn = mysqli_connect($db_host, $db_user, $db_password, $db_database, $db_port);
mysqli_query($conn, "SET NAMES $db_charset");

