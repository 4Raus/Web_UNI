<?php
class Character {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getUserCharacters($userId) {
        $stmt = $this->db->getPDO()->prepare("SELECT * FROM character WHERE author = :author");
        $stmt->execute(['author' => $userId]);
        return $stmt->fetchAll();
    }

    public function getAllCharacters() {
        $stmt = $this->db->getPDO()->query("SELECT * FROM character");
        return $stmt->fetchAll();
    }
}
?>