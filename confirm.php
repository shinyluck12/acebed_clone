<?php
    session_start();
    $_SESSION["sname"] = $_POST["name"];
    $_SESSION["stxtbox"] = $_POST["textbox"];


    //$내가 원하는 이름 = $_POST["name=넣어놓은이름"];
    $title = $_POST["title"];
    $name = $_POST["name"];
    $textbox = explode("\n", $_POST["textbox"]);
    print_r($textbox);     //   Array ( [0] => 1.9월 공지사항 [1] => 2.공지사항에는 뭐가 있습니다. [2] => 3.asdf [3] => 4.asdf )
    $date = $_POST["date"];
    $pw = $_POST["pw"];

    $conn = mysqli_connect("localhost","root","123456","acebed");
    // Check connection
    if(mysqli_connect_errno()){
        echo "MySQL 연결에 실패하였습니다 : " . mysqli_connect_error();
    }
    
    $sql_Typing = "INSERT INTO acebed_board(title,writer,dates,pw,description) 
    VALUES('$title' , '$name' , '$date' , '$pw' , '$textbox')";

    $result = mysqli_query($conn, $sql_Typing);
    if($result === false){
        echo mysqli_error($conn);
    }
    mysqli_close($conn);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="session_con.php" method="POST">
        <?php

        function stringCon($textbox){
            for($i=0; $i<count($textbox); $i++){
                echo $textbox[$i]."<br>";
            }
        }

            echo "제목 : ".$_POST["title"]."<br>";
            echo "이름 : ".$_POST["name"]."<br>";
            echo "본문 : ";
            stringCon($textbox);
            echo "<br>";
            echo "날짜 : ".$_POST["date"]."<br>";
        ?>
        <input type="submit" value="확인" name="conrfirm">
    </form>
    <br>
    <a href="form.html">돌아가기</a>
</body>
</html>