<?php
    $host = 'localhost';
    $user = 'team14';
    $pw = 'team14';
    $dbName = 'todo_db';
    
    $conn = mysqli_connect($host, $user, $pw, $dbName);
        
    $sql = "SELECT * FROM members";
    $result = mysqli_query($conn, $sql);    
    $row = mysqli_fetch_array($result);

    $list_array = array("name" =>$row['name'],
                        "email" =>$row['email'],
                        "phone" => $row['phone']);

    $result_array = json_encode($list_array);
    
    echo $result_array;
    
?>