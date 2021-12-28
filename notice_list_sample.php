<?php
    include "connect.php";
    $sql = "select * from acebed_board";
    $result = mysqli_query($conn, $sql);
    // $row = mysqli_fetch_array($result);
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
    <header>
        에이스베드 헤더
    </header>
    <main>
        <section>
            <h2>공지사항</h2>
            <article>
                <ul>
                    <?php
                        while($row = mysqli_fetch_array($result)){
                        echo "<li>
                            <span>{$row['num']}</span>
                            <a href=\"index_ace_dang.php?num={$row['num']}\"> {$row['title']}</a>
                            <b>{$row['dates']}</b>
                        </li>";
                    }
                    ?>
                </ul>
            </article>
        </section>
    </main>
    <footer>
        에이스 베드 푸터
    </footer>
</body>
</html>