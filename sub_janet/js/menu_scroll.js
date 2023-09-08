$(function(){
	
	$(window).scroll(function() {
		
	var s1 = $('#s1').position().top + 600;
	var s2 = $('#s2').position().top + 600;
	var s3 = $('#s3').position().top + 600;
	var s4 = $('#s4').position().top + 600;
		
		console.log(s1);
	
	var scroll = $(window).scrollTop();
		console.log(scroll);
		console.log(scroll < s1);
		if ( scroll < s1 ) {
			$('#quick_menu ul li').eq(0).addClass('on').siblings().removeClass('on');
		} else if ( s1 <= scroll && scroll < s2 ) {
			$('#quick_menu ul li').eq(1).addClass('on').siblings().removeClass('on');
		} else if ( s2 <= scroll && scroll < s3 ) {
			$('#quick_menu ul li').eq(2).addClass('on').siblings().removeClass('on');
		} else if ( s3 <= scroll && scroll < s4 ) {
			$('#quick_menu ul li').eq(3).addClass('on').siblings().removeClass('on');
		} 
	
	
	
	
	
	
	
	
	
	
	})
	
	
});