$(document).ready(function(){
    $(".tabMenu button").on("click", function(e){
        e.preventDefault();
        var _this = $(this);
        var _index = $(this).index();
        var _tabMenu = _this.closest(".tabMenu");
        var _tabBox = _tabMenu.next(".tabBox");
        _tabMenu.find("button").removeClass("active");
        _this.addClass("active");
        _tabBox.find("> div").removeClass("show");
        _tabBox.find("> div").eq(_index).addClass("show");
    });

    $(".tabWrap .tabMenu1 button").on("click", function(e){
        e.preventDefault();
        var _this = $(this);
        var _index = $(this).index();
        var _tabMenu = _this.closest(".tabMenu1");
        var _tabBox = _tabMenu.closest(".tabWrap").next(".tabBox");
        _tabMenu.find("button").removeClass("active");
        _this.addClass("active");
        _tabBox.find("> div").removeClass("show");
        _tabBox.find("> div").eq(_index).addClass("show");
    });
    
    $(".tabWrap2 .tabMenu3 button").on("click", function(e){
        e.preventDefault();
        var _this = $(this);
        var _index = $(this).index();
        var _tabMenu = _this.closest(".tabMenu3");
        var _tabBox = _tabMenu.closest(".tabWrap2").next(".tabBox");
        _tabMenu.find("button").removeClass("active");
        _this.addClass("active");
        _tabBox.find("> div").removeClass("show");
        _tabBox.find("> div").eq(_index).addClass("show");
    });
    
    $(".btn_link_wrap button").on("click", function(e){
        e.preventDefault();
        var _this = $(this);
        var _id = _this.attr("class");
        var position = $(_id).offset();
        $("html,body").stop().animate({scrollTop:position.top-40},500);
    });
    
});