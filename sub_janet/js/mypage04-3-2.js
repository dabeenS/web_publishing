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

});
