<?php
// index.php
echo "Hello, World!";
echo "This is a simple PHP application.";

// Additional functionality can be added here
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    echo "Received data: " . print_r($data, true);
}
?>