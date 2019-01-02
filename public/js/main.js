var bar = $(".navs_mo");
var nav = $(".navs_mo_sub");
var wid = nav.width();
var navChk = false;
$(window).resize(function(){
	wid = nav.width();
}).trigger("resize");