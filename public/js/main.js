var bar = $(".navs_mo");
var bar2 = $(".nav_close");
var nav = $(".navs_mo_sub");
var navWid = nav.width();
$(window).resize(function(){
	navWid = nav.width();
	if($(window).width() > 768) navHide();
	else navToggle();
}).trigger("resize");
bar.click(navToggle);
bar2.click(navToggle);
function navHide() {
	nav.css({"left":-navWid+"px"});
}
function navToggle() {
	if(nav.position().left == 0) nav.stop().animate({"left": -navWid+"px"}, 500);
	else nav.stop().animate({"left": 0}, 500);
}