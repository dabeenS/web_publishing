 $(document).ready(function () {

     //파일 추가
     var $fileBox1 = $('.filetype1');

     $fileBox1.each(function () {
         var $fileUpload = $(this).find('.input-file'),
             $fileText = $(this).find('.file-text')
         $fileUpload.on('change', function () {
             var fileName = $(this).val();
             $fileText.attr('disabled', 'disabled').val(fileName);
         });
     });

     var $fileBox2 = $('.filetype2');

     $fileBox2.each(function () {
         var $fileUpload = $(this).find('.input-file'),
             $fileText = $(this).find('.file-text')
         $fileUpload.on('change', function () {
             var fileName = $(this).val();
             $fileText.attr('disabled', 'disabled').val(fileName);
         });
     });


     //사업자등록번호 등 중복확인 버튼이 있는 것
     $(".input input").focus(function () {
         $(this).parent().siblings('.explain_red').css("display", "block");
     });

     $(".input input").focusout(function () {
         $(this).parent().siblings('.explain_red').css("display", "none");
     });

     //사업장 주소
     $(".detail2-num").focus(function () {
         $(this).parent().siblings('.explain_red').css("display", "block");
     });

     $(".detail2-num").focusout(function () {
         $(this).parent().siblings('.explain_red').css("display", "none");
     });


     //셀렉트박스 커스텀
     function CustomSelectBox(selector) {
         this.$selectBox = null,
             this.$select = null,
             this.$list = null,
             this.$listLi = null;
         CustomSelectBox.prototype.init = function (selector) {
             this.$selectBox = $(selector);
             this.$select = this.$selectBox.find('.box .select');
             this.$list = this.$selectBox.find('.box .list');
             this.$listLi = this.$list.children('li');
         }
         CustomSelectBox.prototype.initEvent = function (e) {
             var that = this;
             this.$select.on('click', function (e) {
                 that.listOn();
             });
             this.$listLi.on('click', function (e) {
                 that.listSelect($(this));
             });
             $(document).on('click', function (e) {
                 that.listOff($(e.target));
             });
         }
         CustomSelectBox.prototype.listOn = function () {
             this.$selectBox.toggleClass('on');
             if (this.$selectBox.hasClass('on')) {
                 this.$list.css('display', 'block');
             } else {
                 this.$list.css('display', 'none');
             };
         }
         CustomSelectBox.prototype.listSelect = function ($target) {
             $target.addClass('selected').siblings('li').removeClass('selected');
             this.$selectBox.removeClass('on');
             this.$select.text($target.text());
             this.$list.css('display', 'none');
         }
         CustomSelectBox.prototype.listOff = function ($target) {
             if (!$target.is(this.$select) && this.$selectBox.hasClass('on')) {
                 this.$selectBox.removeClass('on');
                 this.$list.css('display', 'none');
             };
         }
         this.init(selector);
         this.initEvent();
     }
     $(function () {
         var select = new CustomSelectBox('.select_box');
     });


     //체크박스
     $('#check_all').click(function () {
         if ($('#check_all').prop("checked")) {
             $('.check_agree').prop("checked", true);
         } else {
             $('.check_agree').prop("checked", false);
         }
     });

     $('.check_agree').click(function () {
         if ($("input[name='check']:checked").length == 2) {
             $('#check_all').prop('checked', true);
         } else {
             $('#check_all').prop('checked', false);
         }
     });


     //모달창
     $('.modalOpen1').click(function () {
         $('.modal1-blind').fadeIn();
         $('.modal1-wrap').fadeIn();
     })
     
     $('.modalOpen2').click(function () {
         $('.modal2-blind').fadeIn();
         $('.modal2-wrap').fadeIn();
     })

     $('.modal-blind').click(function () {
         $(this).fadeOut();
         $(this).next().fadeOut();
     })

     $('.modal-wrap .title .close-box').click(function () {
         $(this).parents('.modal-wrap').fadeOut();
         $(this).parents('.modal-wrap').siblings('.modal-blind').fadeOut();
     })
     
     $('.modal-wrap .bottom_area div').click(function () {
         $(this).parents('.modal-wrap').fadeOut();
         $(this).parents('.modal-wrap').siblings('.modal-blind').fadeOut();
     })








 });
