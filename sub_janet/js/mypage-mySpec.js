$(function () {

    /*좌측 스크롤 메뉴*/
    //    window.addEventListener('scroll', function () {
    //        var top = window.scrollY ||
    //            window.pageXOffset ||
    //            document.documentElement.scrollTop ||
    //            document.body.scrollTop;
    //
    //        if (top > 50) {
    //            $('.aside_wrap').addClass('fixed');
    //        } else {
    //            $('.aside_wrap').removeClass('fixed');
    //        }
    //    });

    /*셀렉트박스*/
    $(".selectBox").on("click", function () {
        var _this = $(this);

        if (_this.is(".active") == true) {
            _this.removeClass("active");
        } else {
            _this.addClass("active");
        }

    });
    $(".selectBox ul li").on("click", function () {
        var _this = $(this);
        var _text = _this.text();
        _this.closest(".selectWrap").find("span").text(_text);
        //        _this.addClass("on").siblings().removeClass("on");
    });


    /*학력구분*/
    $(".lastEdu_select .edu1").on("click", function () {
        //        $(this).addClass("on").siblings().removeClass("on");
        $('.mymanage_wrap .lastEdu .lastEdu_select').css('position', 'absolute');
        $('.mymanage_wrap .lastEdu .edu1_wrap').css('display', 'block');
        $('.mymanage_wrap .lastEdu .edu2_wrap').css('display', 'none');
    });

    $(".lastEdu_select .edu2").on("click", function () {
        //        $(this).addClass("on").siblings().removeClass("on");
        $('.mymanage_wrap .lastEdu .lastEdu_select').css('position', 'absolute');
        $('.mymanage_wrap .lastEdu .edu2_wrap').css('display', 'block');
        $('.mymanage_wrap .lastEdu .edu1_wrap').css('display', 'none');
    });

    
    /*다른 전공 추가하기, 졸업 논문/작품 추가하기*/
    $(document).on("click", ".mymanage_wrap .lastEdu .edu2_wrap .add_btn_wrap .add_majors", function (){
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
        $('.mymanage_wrap .lastEdu .edu2_wrap .majors_wrap').show();
    });
    $(document).on("click", ".mymanage_wrap .lastEdu .edu2_wrap .add_btn_wrap .delete_majors", function (){
        $(this).toggleClass('on');
        $(this).prev().toggleClass('on');
        $('.mymanage_wrap .lastEdu .edu2_wrap .majors_wrap').hide();
    });
    
     $(document).on("click", ".mymanage_wrap .lastEdu .edu2_wrap .add_btn_wrap .add_works", function (){
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
        $('.mymanage_wrap .lastEdu .edu2_wrap .works_wrap').show();
    });
    $(document).on("click", ".mymanage_wrap .lastEdu .edu2_wrap .add_btn_wrap .delete_works", function (){
        $(this).toggleClass('on');
        $(this).prev().toggleClass('on');
        $('.mymanage_wrap .lastEdu .edu2_wrap .works_wrap').hide();
    });

});
