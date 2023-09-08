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

    });

});
