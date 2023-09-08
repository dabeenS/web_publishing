$(function () {

    /*좌측 스크롤 메뉴*/
    window.addEventListener('scroll', function () {
        var top = window.scrollY ||
            window.pageXOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;

        if (top > 50) {
            $('.aside_wrap').addClass('fixed');
        } else {
            $('.aside_wrap').removeClass('fixed');
        }
    });


    /* 보유자격증 탭 */
    $(".tab_tit > li").click(function () {
        var idx = $(this).index();
        $(this).parent().children('li').removeClass("on");
        $(this).parent().children('li').eq(idx).addClass("on");
        $(this).parent().siblings('.tab_box').children('div').removeClass("on");
        $(this).parent().siblings('.tab_box').children('div').eq(idx).addClass("on");
    });
    
    
    /*선택삭제 경고창*/
    $('.delet_btn').click(function() {
        $('.delet_modal').addClass('on');
    });
    $('.delet_modal > .modal_box > .btn_wrap > span').click(function() {
        $('.delet_modal').removeClass('on');
    });

    
    /*보유자격증 추가하기*/
    $('.own_lic_wrap > .lic_list > .add_btn').click(function() {
        $('.own_lic_modal').addClass('on');
    });
    $('.own_lic_modal > .modal_box > .btn_save_bottom').click(function() {
        $('.own_lic_modal').removeClass('on');
    });
    $('.own_lic_modal > .modal_box > .close_btn').click(function() {
        $('.own_lic_modal').removeClass('on');
    });

    
    /*관심자격증 추가하기*/
    $('.hopelic_wrap > .lic_list > .add_btn').click(function() {
        $('.hope_lic_modal').addClass('on');
    });
    $('.hope_lic_modal > .modal_box > .btn_save_bottom').click(function() {
        $('.hope_lic_modal').removeClass('on');
    });
    $('.hope_lic_modal > .modal_box > .close_btn').click(function() {
        $('.hope_lic_modal').removeClass('on');
    });

})
