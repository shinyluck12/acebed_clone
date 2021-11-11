<!DOCTYPE html>
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AceBed_Dang_inner</title>
    <link rel="stylesheet" href="css/dd_reset_ace.css">
    <link rel="stylesheet" href="css/dd_style_ace.css">
    <link rel="stylesheet" href="css/dd_ace_dang.css">
</head>
<body>
    <header>
        <div>
            <div class=h_top>
                    <a href="https://www.acebed.com/member/login/index.do?rtnUrl=%2Fmain%2Findex.do">
                        로그인
                    </a>
                    <a href="ace_join.html">
                        회원가입
                    </a>
                    <a href="">
                        웨딩멤버스
                    </a>
                    <a href="">
                        에이스 침대몰
                    </a>
            </div>
        </div>
        <nav class="h_nav">
            <div class="h_left">
                <ul>
                    <li><a class="eng" href="">BED</a>
                        <a class="kor" href="">침대</a>
                            <ul class="sub">
                                <li>
                                    <a href="frame.html">프레임</a>
                                </li>
                                <li>
                                    <a href="">매트리스</a>
                                </li>
                                <li>
                                    <a href="">신제품</a>
                                </li>
                            </ul>
                    </li>
                    <li><a class="eng" href="">FURNITURE</a>
                        <a class="kor" href="">가구</a>
                            <ul class="sub">
                                <li>
                                    <a href="">룸 세트</a>
                                </li>
                                <li>
                                    <a href="">리빙가구</a>
                                </li>
                            </ul>
                    </li>
                    <li><a class="eng" href="">STRESLESS</a>
                        <a class="kor" href="">스트레스리스</a>
                            <ul class="sub">
                                <li>
                                    <a href="">1인용 리클라이너</a>
                                </li>
                                <li>
                                    <a href="">오피스체어</a>
                                </li>
                                <li>
                                    <a href="">소파</a>
                                </li>
                                <li>
                                    <a href="">테이블&악세서리</a>
                                </li>
                            </ul>
                    </li>
                    <li><a class="eng" href="">SLEEP CARE</a>
                        <a class="kor" href="">슬립케어</a>
                            <ul class="sub">
                                <li>
                                    <a href="">마이크로케어</a>
                                </li>
                                <li>
                                    <a href="">스마트슬리브</a>
                                </li>
                                <li>
                                    <a href="">보이로패드</a>
                                </li>
                                <li>
                                    <a href="">마이크로가드 eco</a>
                                </li>
                            </ul>
                    </li>
                </ul>
            </div>
            <h1 class="h_logo">
                <a href="main.html">
                    <img src="img/header-logo.png" alt="에이스침대로고">
                </a>
            </h1>
            <div class="h_right">
                <ul>
                    <li><a class="r_title" href="">침대과학</a>
                        <ul class="sub">
                            <li>
                                <a href="spring.html">스프링</a>
                            </li>
                            <li>
                                <a href="">기술력</a>
                            </li>
                            <li>
                                <a href="">특허 및 수상내역</a>
                            </li>
                            <li>
                                <a href="">침대공학연구소</a>
                            </li>
                        </ul>
                    </li>
                    <li><a class="r_title" href="">에이스 스토리</a>
                        <ul class="sub">
                            <li>
                                <a href="">NOW SNS</a>
                            </li>
                            <li>
                                <a href="">고객후기</a>
                            </li>
                            <li>
                                <a href="">뉴스룸</a>
                            </li>
                        </ul>
                    </li>
                    <li><a class="r_title" href="">고객체험</a>
                        <ul class="sub">
                            <li>
                                <a href="">매트리스 체험존</a>
                            </li>
                            <li>
                                <a href="">이동수면공학 연구소</a>
                            </li>
                            <li>
                                <a href="">공장 견학 신청</a>
                            </li>
                        </ul>
                    </li>
                    <li><a class="r_title" href="">공지/이벤트</a>
                        <ul class="sub">
                            <li>
                                <a href="">이벤트</a>
                            </li>
                            <li>
                                <a href="dangcheom.html">당첨자 안내</a>
                            </li>
                            <li>
                                <a href="notice_write.html">공지사항</a>
                            </li>
                        </ul>
                    </li>
                    <li><a class="r_title" href="">매장안내</a>
                        <ul class="sub">
                            <li>
                                <a href="">매장찾기</a>
                            </li>
                            <li>
                                <a href="">에이스 스퀘어</a>
                            </li>
                            <li>
                                <a href="">에이스 에비뉴</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li class="search">검색</li>
                    <li class="menu">메뉴</li>
                </ul>
            </div>
        </nav>
    </header>
    <div id="search_wrap">
        <div class="search_txt">
            <input type="text" placeholder="궁금하신 제품이나 정보를 빠르게 찾아보세요">
            <span></span>
        </div>
        <div class="search_close">
            <span>X</span>
        </div>
    </div>
    <?php
        $title = $_POST["title"];
        $date = $_POST["date"];
        $writer = $_POST["writer"];
        $inner = $_POST["inner"];
    ?>
    <main>                
        <h2>공지사항</h2>
        <section id="dang_wrap">
            <article class="dang_tt">
                <div class="dang_top">
                    <div>
                        <h3><?php echo "$title"?></h3>
                        <p><?php echo "$date"?></p>
                    </div>
                    <span></span>
                </div>
                <div class="dang_top_txt">
                    <p>
                    <?php echo "$inner"?>
                    </p>
                </div>
            </article>
            <article class="dang_bot">
                <div>
                    <a href="">
                        <span>목록</span>
                    </a>
                </div>
            </article>
        </section>
        <!-- TOP 버튼 -->
        <div class="side_btn">
            <p class="top">TOP</p>
            <div class="top_btn">+</div>
            <!-- <a href="" class="bottom_btn">
                <span></span>
            </a> -->
            </div>
    </main>
    <footer>
        <div class="f_left"></div>
        <div class="f_nav">           <!--왼쪽-->
            <ul>
                <li>
                <a href="#">기업정보</a>
                </li>
                <li>
                <a href="#">이용약관</a>
                </li>
                <li>
                <a href="#" class="priv">개인정보처리방침</a>
                </li>
                <li>
                <a href="#">매장개설안내</a>
                </li>
                <li>
                <a href="#">특판사업</a>
                </li>
                <li>
                <a href="#">고객지원</a>
                </li>
                <li>
                <a href="#">구매인증센터</a>
                </li>
            </ul>
            <div class="address"></div>
                <p>
                    본사 : 경기도 성남시 중원구 사기막골로 105번길 42(상대원동) / 서울영업본부 : 서울특별시 강남구 도산대로 218 / FAX : 02-544-8788
                </p>
                <p>
                    COPYRIGHT (C) ACE BED CORPORATION ALL RIGHTS RESERVED
                </p>
            </div>
        </div>
        <div id="f_right">                        <!--오른쪽-->
            <form>
                <div class="family_wrap">
                    <div class="family">
                        FAMILY SITE
                    </div>
                    <div class="family_op">
                        <p>ENGLISH</p>
                        <p class="family_txt">에이스 에비뉴</p>
                        <p class="family_txt">에이스 헤리츠</p>
                        <p class="family_txt">에이스 침대몰</p>
                        <div class="wht_btn">
                            <img src="img/select-icon2-wht-on.png">
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="js/dd_script.js"></script>
</body>
</html>