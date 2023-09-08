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


    // 달력 체크
    $(".todo_list .Schedule .date_area ul.list li.active").on("click", function () {
        var $this = $(this);
        var $ul = $this.parent();

        var selectedLiCount = $ul.children('.active.fromday').length;

        if (selectedLiCount <= 0) { // 0개 이하로 선택돼 있으면 추가로 선택한다.
            $this.removeClass('fromday').addClass('fromday');
        } else if (selectedLiCount == 1) { // 1개 선택돼 있으면 모두 해제하고 이번에 선택한 것만 선택
            $ul.children('.active').children().remove('.range');
            $ul.children('.active.fromday').removeClass('fromday');
            $this.removeClass('fromday').addClass('fromday');
            $ul.children('.active').children().remove('.range');
            $ul.children('.active').children().remove('.range2');
        }

        // 일정 표시
        selectedLiCount = $ul.children('.active.fromday').length;
        $ul.find('p.active').removeClass('active'); // 일단 표시된 일정을 다 숨긴다.
        if (selectedLiCount == 1) { // 1개 선택돼 있으면
            $startDay = $ul.children('.active.fromday:first');

            var $thisDay = $startDay.next('.active');

        }

        $this.children('p').removeClass('active').addClass('active');
    });


    
    //알람 on off
    $(".todo_list .list_right .alarm").on("click", function () {
        $(this).toggleClass('on');
    });

    

    //모달 1 - 할 일 추가
    $('.calendar_wrap .list_right .add_btn').on("click", function() {
        $('.todo_add_wrap').addClass('on');
    });
    $('.todo_add_wrap > .modal_box > .btn_save_bottom').on("click", function() {
        $('.todo_add_wrap').removeClass('on');
    });
    $('.todo_add_wrap > .modal_box > .close_btn').on("click", function() {
        $('.todo_add_wrap').removeClass('on');
    });

    //모달 1 - 할 일 추가 : 텍스트에리어 글자수
    $('.todo_add_wrap .textarea > textarea').on('keyup', function () {
        $('.text_cnt').html($(this).val().length + " / 80");

        if ($(this).val().length > 80) {
            $(this).val($(this).val().substring(0, 80));
            $('.text_cnt').html("80 / 80");
        }
    });


    
    /*선택삭제 경고창*/
    $('.calendar_wrap .txt_box .delete').click(function () {
        $('.delet_modal').addClass('on');
    });
    $('.delet_modal > .modal_box > .btn_wrap > span').click(function () {
        $('.delet_modal').removeClass('on');
    });


});
