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

    
    /*아이콘 적용하기*/
    $(".inventory_wrap .item_box").on("mouseenter", function() {
        $(this).addClass('hover');
    });
    $(".inventory_wrap .item_box").on("mouseleave", function() {
        $(this).removeClass('hover');
    });
    
     $('.inventory_wrap .item_box.in_use').off("mouseenter");
     $('.inventory_wrap .item_box.in_use').off("mouseleave");
    
    
    /*사용중인 아이콘*/
    $(".inventory_wrap .item_box.in_use .state_box span").text("사용중");
    
    
    /*모달1-적용완료*/
    $(".inventory_wrap .item_box").on("click", function() {
        $(".inventory_wrap .apply_modal").addClass("on");
    });
     $('.inventory_wrap .item_box.in_use').off("click");
    
    $(".inventory_wrap .apply_modal .btn1").on("click", function() {
        $(this).parents(".apply_modal").removeClass("on");
    });

});
