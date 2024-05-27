<?php
class UserCookie {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function createCookie($userId) {
        $cookie = bin2hex(random_bytes(16));
        $expiresAt = (new DateTime('+1 hour'))->format('Y-m-d H:i:s');
        $stmt = $this->db->getPDO()->prepare("INSERT INTO user_cookie (user_id, cookie, expires_at) VALUES (:user_id, :cookie, :expires_at)");
        $stmt->execute(['user_id' => $userId, 'cookie' => $cookie, 'expires_at' => $expiresAt]);
        setcookie('user_cookie', $cookie, time() + 3600, '/');
    }

    public function validateCookie($cookie) {
        $stmt = $this->db->getPDO()->prepare("SELECT * FROM user_cookie WHERE cookie = :cookie AND expires_at > NOW()");
        $stmt->execute(['cookie' => $cookie]);
        return $stmt->fetch();
    }

    public function deleteCookie($cookie) {
        $stmt = $this->db->getPDO()->prepare("DELETE FROM user_cookie WHERE cookie = :cookie");
        $stmt->execute(['cookie' => $cookie]);
    }
}
?>