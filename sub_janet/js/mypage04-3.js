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
    
    /*04-3*/
    /*이모티콘,첨부파일,동영상*/
    $('.etc_area .btn_emoticon').click(function() {
        $(this).toggleClass('active').siblings().removeClass('active');
        $('#emoticon').toggleClass('active');
    })
    $('.etc_area .btn_file').click(function() {
        $(this).toggleClass('active').siblings().removeClass('active');
        $('.file_hidden').toggleClass('active');
    })
    $('.etc_area .btn_movie').click(function() {
        $(this).toggleClass('active').siblings().removeClass('active');
        $('.movie_hidden').toggleClass('active');
    })
    
    
    
    
    
    
    
    
    
    /*이모티콘*/
    $('#emoticon .top ul li').on('click', function (){
        
    });
    
    
    
    
    /*답변쓰기-동영상 모달*/
    $('.movie_pop').click(function() {
        $('#popup_movie').css('display','flex');
    });
    
    $('#popup_movie .movie_pop_close').click(function() {
        $('#popup_movie').css('display','none');
    });
    
});
