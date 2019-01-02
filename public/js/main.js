var bar = $(".navs_mo");
var bar2 = $(".nav_close");
var nav = $(".navs_mo_sub");
var navWid = nav.width();
$(window).resize(function(){
	navWid = nav.width();
	if($(window).width() > 768) navInit();
	else navMove();
}).trigger("resize");
bar.click(navMove);
bar2.click(navMove);
function navInit() {
	nav.css({"left":-navWid+"px"});
}
function navMove() {
	if(nav.position().left == 0) nav.stop().animate({"left": -navWid+"px"}, 500);
	else nav.stop().animate({"left": 0}, 500);
}