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


    //SELECT 전체 내려오는 부분
    $(".select_wrap>p").click(function(){
        $(".select").slideToggle(200);
    });
    /* $(".select_wrap>p").click(function(){
        $(".select").hide();
    }); */



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



    $('.check').on("click", "#selectAll", function(){
        $(this).parents(".check").find('input').prop("checked", $(this).is(":checked"));
    });

    $("input[type=submit]").click(function(){
        if($("input[name=name]").val().length==0){alert("이름을 입력하세요."); $("input[name=name]").focus(); return false;};
        if($("input[name=tel]").val().length==0){alert("휴대전화 번호를 입력하세요."); $("input[name=tel]").focus(); return false;};
        if($("input[name=email]").val().length==0){alert("이메일을 입력하세요."); $("input[name=email]").focus(); return false;}; 
        if($("input[name=pw]").val().length==0){alert("비밀번호를 입력하세요."); $("input[name=pw]").focus(); return false;};  
        if($("input[name=re_pw]").val().length==0){alert("비밀번호를 한 번 더 입력하세요."); $("input[name=re_pw]").focus(); return false;};  
    })


    $(".join_btn").click(function(){
        window.location.href = 'ace_form.html';
    })





    
});
