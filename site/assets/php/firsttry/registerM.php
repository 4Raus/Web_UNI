<?php
session_start();
require 'dbM.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = $_POST['logname'];
    $email = $_POST['logemail'];
    $password = $_POST['logpass'];
    $hash = password_hash($password, PASSWORD_DEFAULT);

    // checking user
    $stmt = $pdo->prepare("SELECT * FROM user WHERE login = :login OR email = :email");
    $stmt->execute(['login' => $login, 'email' => $email]);
    $user = $stmt->fetch();

    if ($user) {
        echo "Пользователь с таким логином или email уже существует";
    } else {
        // reg new user
        $stmt = $pdo->prepare("INSERT INTO user (login, email, password) VALUES (:login, :email, :password)");
        $stmt->execute(['login' => $login, 'email' => $email, 'password' => $hash]);
        header("Location: /loginsign.html");
        exit();
    } 
}
?>