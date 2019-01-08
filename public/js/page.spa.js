var gap = 300;		// page가 나타나기 전 px
var now = 0;			// 현재 페이지
var scTop = 0;		// 현재 문서의 scrollTop
var pages = new Array();	// 각각의 페이지의 상단으로 부터 떨어진 거리
$("body").imagesLoaded(function(){
	$(".page").each(function(i){
		pages[i] = $(this).offset().top;
	});
});
$(window).scroll(function(e){
	$(".page").each(function(i){
		pages[i] = $(this).offset().top;
	});
	scTop = $("html, body").scrollTop();
	now = pages.length - 1;
	for(var i in pages) {
		if(scTop + gap < pages[i]) {
			now = i - 1;
			break;
		}
	}
	console.log(now);
});