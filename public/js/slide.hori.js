/*
var now = 1;
var end = $(".slide").length;
$(".banner_wrap").append($(".slide").eq(0).clone());
//$(".slide").eq(0).clone().appendTo($(".banner_wrap"));
$(".slide").each(function(i){
	$(this).css({"left":(i*100)+"%"});
});
ani();
function ani() {
	$(".banner_wrap").delay(2000).animate({"left":-(now*100)+"%"}, 1000, function(){
		if(now == end) {
			$(".banner_wrap").css({"left":0});
			now = 1;
		}
		else now++;
		ani();
	});
}
*/
var now = 0;
var end = $(".slide").length - 1;
var dir = -1;
function init() {
	$(".banner_wrap").css({"left":0});
	$(".slide").hide(0);
	$(".slide").eq(now).css({"left":0}).show(0);
	if(now == 0) {
		$(".slide").eq(end).css({"left":"-100%"}).show(0);
		$(".slide").eq(now+1).css({"left":"100%"}).show(0);
	}
	else if(now == end) {
		$(".slide").eq(now-1).css({"left":"-100%"}).show(0);
		$(".slide").eq(0).css({"left":"100%"}).show(0);
	}
	else {
		$(".slide").eq(now-1).css({"left":"-100%"}).show(0);
		$(".slide").eq(now+1).css({"left":"100%"}).show(0);
	}
}
function ani() {
	init();
	$(".banner_wrap").delay(2000).animate({"left":(100*dir)+"%"}, 1000, function(){
		if(dir == -1) {
			if(now == end) now = 0;
			else now++;
		}
		else {
			if(now == 0) now = end;
			else now--;
		}
		ani();
	});
}
ani();