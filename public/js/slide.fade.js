/* var depth = 0;
var now = 0;
var end = $(".slide").length - 1;
$(".slide").each(function(){
	if(depth < $(this).css("z-index")) depth = $(this).css("z-index");
});
depth++;
ani();
function ani() {
	$(".slide").eq(now).css({"z-index":depth++, "opacity":0});
	$(".slide").eq(now).delay(3000).animate({"opacity":1}, 1000, function(){
		if(now == end) now = 0;
		else now++;
		ani();
	});
} */

var FadeSlide = (function(){
	function FadeSlide() {
		
	}
	FadeSlide.prototype.init = function() {
		
	}
	return FadeSlide;
}());

var mainBanner = new FadeSlide();
