$(document).ready(function(){
    //header 네비게이션 마우스 올리면 펼쳐지는거
    $(".kor, .sub").hide();

    $(".h_left>ul>li").mouseenter(function(){   //header 펼쳐지는 부분
        $(".sub").fadeIn(500);
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
        $(".news_event1>h4").css({
            "color" : "#0890c0"
        });
        $(".news_event1>p").css({
            "color" : "#0890c0"
        });
        $(".news_event2>h4").css({
            "color" : "#999"
        });
        $(".news_event2>p").css({
            "color" : "#999"
        });
        $(".news_event3>h4").css({
            "color" : "#999"
        });
        $(".news_event3>p").css({
            "color" : "#999"
        });
        $(".news_img2, .news_img3").hide();
    });
    $(".news_event2").click(function(){
        $(".news_img2").show();
        $(".news_event2>h4").css({
            "color" : "#0890c0"
        });
        $(".news_event2>p").css({
            "color" : "#0890c0"
        });$(".news_event1>h4").css({
            "color" : "#999"
        });
        $(".news_event1>p").css({
            "color" : "#999"
        });
        $(".news_event3>h4").css({
            "color" : "#999"
        });
        $(".news_event3>p").css({
            "color" : "#999"
        });
    

        $(".news_img1, .news_img3").hide();
    });
    $(".news_event3").click(function(){
        $(".news_img3").show();
        $(".news_event3>h4").css({
            "color" : "#0890c0"
        });
        $(".news_event3>p").css({
            "color" : "#0890c0"
        });
        
        $(".news_event1>h4").css({
            "color" : "#999"
        });
        $(".news_event1>p").css({
            "color" : "#999"
        });
        $(".news_event2>h4").css({
            "color" : "#999"
        });
        $(".news_event2>p").css({
            "color" : "#999"
        });
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

});

$(document).ready(function(){
    $(".box").animate({
        borderWidth : "200px 80px 80px",
        paddingTop : "200px"
    }, 1500);



    $(".sys_img>img").css("visibility","hidden");   //hide하면 자리도없어지고 숨어버림
    $(".sys span").hide();0
    $(".sys>p").css("visibility","hidden");


    $(this).find(".sys").mouseenter(function(){

            $(this).find(".sys_img>img").css("visibility","visible");
            $(this).find("span").show();
            $(this).find("p").css("visibility","visible").animate({ top : "0"});
            $(this).siblings().find(".sys_img>img").css("visibility","hidden");
            $(this).siblings().find("span").hide();
            $(this).siblings().find("p").css("visibility","hidden").animate({ top : "50px"});
    });


    var swiper = new Swiper(".s_list", {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".s_slide", {
        spaceBetween: 10,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        thumbs: {
        swiper: swiper,
        },
});

});
