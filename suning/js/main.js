$(function(){
	var $banner = $(".sn_banner")
	var width = $banner.width()
	var $image = $banner.find('ul:first');
	var $point = $banner.find('ul:eq(1)')
	var $points = $point.find('li');
	var animateFuc = function(){
		$image.animate({
			'transform':'translateX('+(-index*width)+'px)'
		},200,'linear',function(){
			if(index >= 9){
				index=1
				$image.css({
					'transform':'translateX('+(-index*width)+'px)'
				})
			}else if(index<=0){
				index = 8
				$image.css({
					'transform':'translateX('+(-index*width)+'px)'
				})
			}
			$points.removeClass("now").eq(index-1).addClass("now")
		});
	}
	var index = 1;
	var timer = setInterval(function(){
		index++
		animateFuc()
		
	},3000)
	$image.on('swipeRight',function(){
		index --;
		animateFuc()

	})
	$image.on('swipeLeft',function(){
		index++
		animateFuc()
	})
	new IScroll('.content_box',{
		scrollX:true,
 		scrollY:false
	})

	//ad轮播
	var mySwiper = new Swiper("#adbanner",{
 		autoplay:{
 			delay:1000
 		},
 		loop: true,
 		preventClicks : false,
 		pagination: {
 			el:".swiper-pagination"
 		},
 	})
 	//ad轮播
	var mySwiper = new Swiper("#adbanner2",{
 		autoplay:{
 			delay:3000
 		},
 		loop: true,
 		pagination: {
 			el:".swiper-pagination2"
 		},
 	})
 	//回到顶部
 	var $gotop_btn = $('.gotop')
 	$(window).on('scroll',function(){
 		var S_top = $(window).scrollTop();
 		if(S_top>=300){
 			$gotop_btn.show()
 		}else{
 			$gotop_btn.hide()
 		}
 	})
 	$gotop_btn.on('click',function(){
 		 clearInterval(timer)
 		 var curscrolltop = $('html,body').scrollTop()
 		 var speed = 50;
 		 if(curscrolltop>0){
 		 	var timer = setInterval(function(){
 		 		 curscrolltop = curscrolltop-speed
 		 		$("html,body").scrollTop(curscrolltop)
 		 		if(curscrolltop<=0){
 		 			clearInterval(timer)
 		 			console.log('stop')
 		 		}
 		 	},1)
 		 }
 		
 	})
 	
})
