$(document).ready(function(){

    $(".pw_check1",".pw_check2",".pw_check3").hide();

    $('#re_pw').focusout(function () {
        var pwd1 = $("#pw").val();
        var pwd2 = $("#re_pw").val();

        if ( pwd1 != '' && pwd2 == '' ) {
            null;
        } else if (pwd1 != "" || pwd2 != "") {
            if (pwd1 == pwd2) {
                $(".pw_check3").show();
                $(".pw_check2").hide();
            } else {
                $(".pw_check2").show();
                $(".pw_check3").hide();
            }
        }
    });





})
