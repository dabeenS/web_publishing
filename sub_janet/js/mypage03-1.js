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

    
    /*전체 상품 탭*/
    $(".pointshop_wrap .all_item .title_wrap .case_tag li").on("click", function () {
        var idx = $(this).index();
        $('.pointshop_wrap .all_item .title_wrap .case_tag li').removeClass("on");
        $('.pointshop_wrap .all_item .title_wrap .case_tag li').eq(idx).addClass("on");
        $(this).parents('.title_wrap').siblings('.item_list').removeClass("on");
        $(this).parents('.title_wrap').siblings('.item_list').eq(idx).addClass("on");
    });
    
    
    /* 모달 1&2 공통 */
    $('.pointshop_wrap .btn_purchase').on("click", function() {
        $('.pointshop_wrap .purchase_modal01').addClass("on");
    });
    $('.pointshop_wrap .btn_purchase.com').off("click");
    
    $('.pointshop_wrap .purchase_modal01 .btn_wrap .btn2').on("click", function() {
        $('.pointshop_wrap .purchase_modal02').addClass("on");
        $(this).parents('.purchase_modal01').removeClass("on");
    });
    
    
    
    $('.purchase_modal .modal_box .close_btn').on("click", function() {
        $(this).parents('.purchase_modal').removeClass("on");
    });
    
    $('.pointshop_wrap .purchase_modal01 .btn_wrap .btn1').on("click", function() {
        $(this).parents('.purchase_modal01').removeClass("on");
    });
    
    $('.pointshop_wrap .purchase_modal02 .btn_wrap span').on("click", function() {
        $(this).parents('.purchase_modal02').removeClass("on");
    });
    

});
