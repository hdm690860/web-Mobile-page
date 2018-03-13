window.onload = function(){
	//初始化页面功能
	//搜索
	search()
	//轮播
	banner()
	//倒计时
	downTime()
}

var search=function(){
	var search = document.querySelector('.jd_searchbox')
	var banner = document.querySelector('.jd_banner')
	var bannerheight= banner.offsetHeight;

	window.onscroll = function(){
		var s_top = document.body.scrollTop || document.documentElement.scrollTop  ;
		var opacity = 0
		if(s_top>bannerheight){
			opacity = 0.9;
		}else{
			opacity = 0.9*(s_top/bannerheight)
		}
		search.style.background ='rgba(216,80,92,'+opacity+')'
	}
}
var banner = function(){
	var banner = document.querySelector('.jd_banner');
	var width =  banner.offsetWidth;
	var imageBox = banner.querySelector('.bannerimg')
	var pointBox = banner.querySelector('ul:last-child')
	var points = pointBox.querySelectorAll('li');
	var addTransition = function(){
		imageBox.style.transition='all 0.2s';
		imageBox.style.webkitTransition='all 0.2s';
	}
	var removeTransition = function(){
		imageBox.style.transition='none';
		imageBox.style.webkitTransition='none';
	}
	var setTranslateX = function(translateX){
		imageBox.style.transform = 'translateX('+translateX+'px)';
		imageBox.style.wekitTransform = 'translateX('+translateX+'px)';
	}
	var index = 1
	var timer = setInterval(function(){
		index ++;
		addTransition()
		setTranslateX(-index*width)
	},2000);

	imageBox.addEventListener('transitionend',function(){
		if(index >= 7){
			index = 1;
			removeTransition()
			setTranslateX(-index*width)
		}else if(index <= 0){
			index = 6;
			removeTransition()
			setTranslateX(-index*width)
		}
		setPoint()
	});
	var setPoint = function(){
			for(var i=0;i<points.length;i++){
				points[i].classList.remove('now');
			}
			points[index-1].classList.add('now')
		}

	var startX = 0
	var distanceX = 0
	var isMove = false
	imageBox.addEventListener('touchstart',function(e){
		clearInterval(timer)
		startX = e.touches[0].clientX;
	});
	imageBox.addEventListener('touchmove',function(e){
		e.preventDefault();
		var moveX = e.touches[0].clientX;
		distanceX = moveX - startX
		var transitionX = -index*width+distanceX
		removeTransition()
		setTranslateX(transitionX)
		isMove = true
	},false);
	imageBox.addEventListener('touchend',function(){
		if(isMove){
			if(Math.abs(distanceX)< width/3){
				addTransition()
				setTranslateX(-index*width)
			}else{
				if(distanceX>0){
					index--
				}else{
					index++
				}
				addTransition()
				setTranslateX(-index*width)
			}
		}
	clearInterval(timer)
	timer = setInterval(function(){
		index ++;
		addTransition()
		setTranslateX(-index*width)
	},2000);
	startX = 0
	distanceX = 0
	isMove = false
	})

}
var downTime = function(){
	var time = 60*60*11
	var skTime =document.querySelector('.time_sk')
	var spans = skTime.querySelectorAll('span')
	var timer =  setInterval(function(){
		time--;
		var h = Math.floor(time/3600);
		var m = Math.floor(time%3600/60)
		var s = time%60

		spans[0].innerHTML =Math.floor(h/10)
		spans[1].innerHTML =h%10

		spans[3].innerHTML =Math.floor(m/10)
		spans[4].innerHTML =m%10

		spans[6].innerHTML =Math.floor(s/10)
		spans[7].innerHTML =s%10

		if(time<=0){
			clearInterval(timer)
		}
	},1000)
}