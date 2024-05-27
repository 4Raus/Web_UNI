<?php
class User {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function register($login, $email, $password) {
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $this->db->getPDO()->prepare("SELECT * FROM user WHERE login = :login OR email = :email");
        $stmt->execute(['login' => $login, 'email' => $email]);
        $user = $stmt->fetch();

        if ($user) {
            return "User with this login or email already exists";
        } else {
            $stmt = $this->db->getPDO()->prepare("INSERT INTO user (login, email, password) VALUES (:login, :email, :password)");
            $stmt->execute(['login' => $login, 'email' => $email, 'password' => $hash]);
            return null;
        }
    }

    public function login($login, $password) {
        $stmt = $this->db->getPDO()->prepare("SELECT * FROM user WHERE login = :login");
        $stmt->execute(['login' => $login]);
        $user = $stmt->fetch();

        if ($user && password_verify($password, $user['password'])) {
            return $user['id'];
        } else {
            return false;
        }
    }
}
?>