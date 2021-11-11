$(document).ready(function(){
    //header 네비게이션 마우스 올리면 펼쳐지는거
    $(".kor, .sub").hide();

    $(".h_left>ul>li").mouseenter(function(){   //header 펼쳐지는 부분
        $(".h_left .sub").fadeIn(500);
        $("header").animate({height : "400px"});
        $(".h_logo").fadeOut(300);
        $(".eng").hide();
        $(".kor").show();
    });

    $(".h_left").mouseleave(function(){
        //$(".sub").hide(100);
        $(".h_logo").fadeIn(100);
        $(".sub").hide(100);
        //$(".sub").animate({height : "0"});
        $("header").animate({height : "150px"});
        $(".eng").show();
        $(".kor").hide();
    }); 
    $(".h_right").mouseenter(function(){   //header 펼쳐지는 부분
        $(".h_right .sub").fadeIn(500);
        $("header").animate({height : "400px"});
        $(".h_logo").fadeOut(300);

    });

    $(".h_right").mouseleave(function(){
        //$(".sub").hide(100);
        $(".h_logo").fadeIn(100);
        $(".sub").hide(100);
        //$(".sub").animate({height : "0"});
        $("header").animate({height : "150px"});

    }); 

    //ACE NEWS event 누르면 사진 바뀌는거 -이제 됨
    $(".news_img2, .news_img3").hide();
    
    $(".news_event1").click(function(){
        $(".news_img1").show();
        $(".news_img2, .news_img3").hide();
    });
    $(".news_event2").click(function(){
        $(".news_img2").show();
        $(".news_img1, .news_img3").hide();
    });
    $(".news_event3").click(function(){
        $(".news_img3").show();
        $(".news_img1, .news_img2").hide();
    });
    
    //검색 버튼 내려오는 거
    $("#search_wrap").slideUp();
    $(".search").click(function(){
        $("#search_wrap").slideDown();
        $("header").animate({height : "200px"});
    });
    $(".search_close").click(function(){
        $("#search_wrap").slideUp();
        $("header").animate({height : "150px"});
    });

    //패밀리 사이트 올라오는거
    $(".family_op").hide();

    $(".family").click(function(){
        $(".family_op").slideDown();

    
    });
    $(".wht_btn").click(function(){
        $(".family_op").slideUp();
    });

    //TOP 버튼 만들기
    $(".top").fadeOut();
    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        if(sct > 100){                //100만큼 스크롤이 되면 실행해라
            $(".top").fadeIn(700);
        }
    });

    //Swiper 사진 옆으로 넘기기
    var swiper = new Swiper(".mySwiper", {
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });
})
