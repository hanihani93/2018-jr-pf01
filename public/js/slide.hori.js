var now = 1;
var end = $(".slide").length;
//$(".banner_wrap").append($(".slide").eq(0).clone());
$(".slide").eq(0).clone().appendTo($(".banner_wrap"));
$(".slide").each(function(i){
	$(this).css({"left":(i*100)+"%"});
});
ani();
function ani() {
	$(".banner_wrap").delay(2000).animate({"left":-(now*100)+"%"}, 100, function(){
		if(now == end) {
			$(".banner_wrap").css({"left":0});
			now = 1;
		}
		else now++;
		ani();
	});
}