<?php
session_start();
require 'database.php';
require 'classes/user.php';

$db = new Database('localhost', 'users', 'root', '');
$user = new User($db);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = $_POST['logname'];
    $email = $_POST['logemail'];
    $password = $_POST['logpass'];

    $error = $user->register($login, $email, $password);
    if ($error) {
        echo $error;
    } else {
        header("Location: /loginsign.php");
        exit();
    }
}
?>