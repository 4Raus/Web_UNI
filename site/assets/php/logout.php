<?php
session_start();
require 'database.php';
require 'classes/UserCookie.php';

$db = new Database('localhost', 'users', 'root', '');
$userCookie = new UserCookie($db);

// if cookie exists
if (isset($_COOKIE['user_cookie'])) {
    // delete the cookie from the database
    $userCookie->deleteCookie($_COOKIE['user_cookie']);
    // delete the cookie from the browser
    setcookie('user_cookie', '', time() - 3600, '/');
}

// delete session
session_unset();
session_destroy();

// go to login page
header("Location: /loginsign.php");
exit();
?>
