<?php
// FILEPATH: /home/anthony.reis/Área de Trabalho/3-Trimestre_DevWeb/public/index.php

// Sign-in functionality
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['sign_in'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate username and password
    if ($username === 'admin' && $password === 'password') {
        // Successful sign-in
        echo 'Sign-in successful!';
    } else {
        // Invalid credentials
        echo 'Invalid username or password';
    }
}

// Login functionality
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate username and password
    if ($username === 'admin' && $password === 'password') {
        // Successful login
        echo 'Login successful!';
    } else {
        // Invalid credentials
        echo 'Invalid username or password';
    }
}
?>
