<?php
    session_start();
    if(isset($_POST["conrfirm"]))
    {
        echo $_SESSION["sname"]."님의 글이 작성되었습니다.<br>";
        echo "본문 내용 : ".$_SESSION["stxtbox"]."<br>";
    }
        echo "제목 : ".$_POST["title"]."<br>";
        echo "이름 : ".$_POST["name"]."<br>";
        echo "본문 : ".$_POST["textbox"]."<br>";
        echo "날짜 : ".$_POST["date"]."<br>";
?>
<br>
<a href="form.html">돌아가기</a>