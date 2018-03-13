
$(function(){
	banner()
	initTab()
	$('[data-toggle="tooltip"]').tooltip()
})

var banner = function(){
	var $banner = $('.wjs_banner');
	var $point = $banner.find('.carousel-indicators');
	var $image = $banner.find('.carousel-inner');
	var $window = $(window)

	var data=[
		{
			pcSrc:'images/slide01.jpg',
			mSrc:'images/m_slide01.jpg'
		},
		{
			pcSrc:'images/slide02.jpg',
			mSrc:'images/m_slide02.jpg'
		},
		{
			pcSrc:'images/slide03.jpg',
			mSrc:'images/m_slide03.jpg'
		},
		{
			pcSrc:'images/slide04.jpg',
			mSrc:'images/m_slide04.jpg'
		}
	];
	var render = function(){
		var isMobible = $window.width() <768?true:false;
		var pointHtml = '';
		var imageHtml = '';
		$.each(data,function(i,item){
			pointHtml += '<li data-target="#carousel-example-generic" data-slide-to="'+i+'" '+(i==0?'class="active"':'')+'></li>\n'
			imageHtml += '<div class="item '+(i==0?'active':'')+'">'
			if(isMobible){
				imageHtml += '<a href="" class="m_imgbox"><img src="'+(item.mSrc)+'" alt=""></a>'
			}else{
				imageHtml += '<a href="" class="pc_imgbox" style="background-image: url('+(item.pcSrc)+')"></a>'
			}
			imageHtml += '</div>'
		})
		$point.html(pointHtml)
		$image.html(imageHtml)
	}
	render()
	// $window.on('resize',function(){

	// })
	var startX = 0;
	var distanceX = 0
	var isMove = false
	$banner.on('touchstart',function(e){
		startX = e.originalEvent.touches[0].clientX;
	})
	$banner.on('touchmove',function(e){
		var moveX = e.originalEvent.touches[0].clientX;
		distanceX = moveX - distanceX
		isMove = true
	})
	$banner.on('touchend',function(e){
		if(isMove && Math.abs(distanceX)>= 50){
			if(distanceX > 0){
				/*right*/
				$banner.carousel('prev')
			}else{
				/*left*/
				$banner.carousel('next')
			}
		}

		startX = 0
		distanceX = 0
		isMove = false
	})
}

var initTab = function(){
 	var tabs = $('.wjs_product .nav-tabs');
 	var liList = tabs.find('li');
 	var width = 0;
 	$.each(liList,function(i,item){
 		width += $(item).outerWidth(true);

 	})

 	tabs.width(width);
 	//滑动
 	new IScroll('.nav-tabsbox',{
 		scrollX:true,
 		scrollY:false
 	})

 	//ad轮播
 	var mySwiper = new Swiper("swiper-container",{
 		autoplay:{
 			delay:1000
 		}
 	})
 }