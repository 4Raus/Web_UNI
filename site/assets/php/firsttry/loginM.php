<?php
session_start();
require 'dbM.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = $_POST['login'];
    $password = $_POST['logpass'];

    // Checking user
    $stmt = $pdo->prepare("SELECT * FROM user WHERE login = :login");
    $stmt->execute(['login' => $login]);
    $user = $stmt->fetch();

    if ($user) {
        if (password_verify($password, $user['password'])) {
            // login
            $_SESSION['user_id'] = $user['id'];
            header("Location: /register.html");
            exit();
        } else {
            echo "Неверный логин или пароль";
        }
    } else {
        echo "Пользователь с таким login не существует";
    }
}
?>