$(function () {


//	setInterval(function () {
//
//		$('.banner1 .object').animate({
//			top: '20px'
//		}, 2000, 'swing').animate({
//			top: '50px'
//		}, 2000, 'swing')
//
//	}, 4000);


	
	//섹션1 배너 전환
	
	$('.s1 .banner-list > li').click(function() {
		
		$(this).addClass('on').siblings().removeClass('on');
		
		var i = $(this).index();
		console.log(i);
		
		$('.s1 .banner > li').eq(i).addClass('on').siblings().removeClass('on');
		
		
	});

	
	
	// 자동 전환
	
	var banner_arr = $('.banner-list').children('li');
	console.log(banner_arr);
	console.log(banner_arr.length);
	
	var a = 0;
	
	function bannerR() {
		
		a++;
		
		if ( a > banner_arr.length - 1 ) { a = 0 ; }
		
		$('.banner > li').eq(a).addClass('on').siblings().removeClass('on');
		
		$('.banner-list > li').eq(a).addClass('on').siblings().removeClass('on');
		
		console.log(a);
	}
	
	rolling = setInterval(bannerR, 8500);

	
	
	
	
	
	//베스트 메뉴
	
	$('.bestMenu-list ol li').click(function() {
		
		var b = $(this).index();
		console.log(b);
		
		$('.s2 ul .bestMenu').eq(b).addClass('on').siblings().removeClass('on');
		
		$(this).addClass('on').siblings().removeClass('on');
		
		var c = b+1
		
		$('.bestMenu-img').removeClass('img'+'1').removeClass('img'+'2').removeClass('img'+'3').addClass('img'+c);
		
		
		
	})





});
