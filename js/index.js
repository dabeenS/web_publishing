$(function(){


    // 네비 나오기
    $('#menu_btn').click(function () {

           $('.nav').css({
              'width': '50%',
              'overflow-y': 'auto'
           });

           $('.nav #nav_btn').css('display', 'block');

    });

    //네비 없애기
    $('#nav_btn').click(function() {
      $('.nav').css({
        'width': '0',
        'overflow-y': 'hidden'
     });

     $('.nav #nav_btn').css('display', 'none');

    })


});