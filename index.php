<?php
// index.php
echo "Hello, World!";
echo "This is a simple PHP application.";

// Additional functionality can be added here
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    echo "Received data: " . print_r($data, true);
    // Process the received data as needed
    if (isset($data['name']) && isset($data['email'])) {
        echo "Name: " . htmlspecialchars($data['name']) . ", Email: " . htmlspecialchars($data['email']);
    } else {
        echo "Invalid data received.";
    }
}
?>