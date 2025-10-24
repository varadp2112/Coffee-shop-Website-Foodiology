<?php
// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["Name"];
    $email = $_POST["email"];
    $order = $_POST["order"];
    $customization = isset($_POST["customization"]) ? implode(", ", $_POST["customization"]) : ""; // Convert array to string

    // Add more fields as needed

    // Sanitize and validate the data (not shown for brevity)

    // Store the data in the database (using PDO for example)
    try {
        $pdo = new PDO("mysql:host=localhost;dbname=foodiology", "saish", "saish@0412");
        // Prepare SQL statement
        $stmt = $pdo->prepare("INSERT INTO orders (name, email, order, customization) VALUES (?, ?, ?, ?)");
        // Bind parameters
        $stmt->bindParam(1, $name);
        $stmt->bindParam(2, $email);
        $stmt->bindParam(3, $order);
        $stmt->bindParam(4, $customization);
        // Execute the statement
        $stmt->execute();
        // Redirect to the payment page
        header("Location: payment_page.php");
        exit();
    } catch (PDOException $e) {
        // Handle database errors
        echo "Error: " . $e->getMessage();
    }
} else {
    // Redirect to the order page if accessed directly without form submission
    header("Location: order.html");
    exit();
}
?>
