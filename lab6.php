<?php

print_r($_POST);
/*
    $text = $_POST["text"];
    $fontSize = $_POST["fontSize"];
    $letterSpacing = $_POST["letterSpacing"];
    $color1 = $_POST["color1"];
    $color2 = $_POST["color2"];
    $animLength = $_POST["animLength"];

    var_dump($text, $fontSize, $letterSpacing, $color1, $color2, $animLength);

    /*$conn = new mysqli('localhost', 'root', '', 'web_lab6')
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into glitch_text(text, fontSize, letterSpacing, color1, color2, animLength) 
        values($text, $fontSize, $letterSpacing, $color1, $color2, $animLength)");
        $stmt->bind_param("sisssi", $text, $fontSize, $letterSpacing, $color1, $color2, $animLength);
        $stmt->execute();
        echo "text added!"
        $stmt->close();
        $conn->close();
    }*/
?>
