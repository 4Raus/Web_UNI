<?php
session_start();
require 'database.php';
require 'classes/user.php';
require 'classes/UserCookie.php';

$db = new Database('localhost', 'users', 'root', '');
$user = new User($db);
$userCookie = new UserCookie($db);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = $_POST['login'];
    $password = $_POST['logpass'];

    $userId = $user->login($login, $password);
    if ($userId) {
        $_SESSION['user_id'] = $userId;
        $userCookie->createCookie($userId);
        header("Location: /register.html");
        exit();
    } else {
        echo "Incorrect login or password";
    }
}
?>