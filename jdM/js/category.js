window.onload=function(){

	iscorllLeft();
	rightSwipe()
}


var iscorllLeft = function(){
	new IScroll('#wrapper')
}
var rightSwipe = function(){
	new IScroll(document.querySelector('.cate_right'))
}