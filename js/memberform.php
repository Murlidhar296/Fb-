<?php
require_once 'config.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sponsorId = $_POST['sponsorId'];
$fullname = $_POST['fullname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
 
// Prepare the SQL statement
$stmt = $conn->prepare("INSERT INTO users (sponsorId, fullname, phone, email) VALUES (?, ?, ?, ?)");

// Bind the parameters
$stmt->bind_param("ssss", $sponsorId, $fullname, $phone, $email);

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>