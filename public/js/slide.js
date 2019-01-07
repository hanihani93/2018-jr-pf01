/*
//객체 생성
var Hello = (function(){
	//Constructor - 생성자(new Slide() 하면 아래의 함수가 실행됨)
	function Hello(_name) {
		this.message = "Hello " + _name;
	}
	//Method - 객체 안의 함수
	Hello.prototype.greeting = function(){
		return this.message;
	}
	return Hello; //new Slide() 호출의 리턴값
}());

var hello = new Hello("booldook");
console.log(hello.greeting());
*/

/*
슬라이드를 만들기 위한 준비
1. 필요한 요소들(HTML 객체) : 
	- parent (부모 - 슬라이드 들을 감싸는 객체)
	- container (슬라이드 들을 감싸고 움직일 객체)
	- slide (슬라이드)
2. 옵션(변수) : 
	- speed : 움직임의 속도
	- gap : 에니메이션 term
	- direction : 방향
	- type : hori, vert, fade ... 
	- pager : 페이저 유/무
	.
	.
	.
3. 작동기능(메서드) :
	- 1번의 객체를 2번의 옵션으로 실제 실행
*/
var Slide = (function(){
	var obj = this;
	function Slide(parent, container, slide, options) {
		obj.parent = parent;
		obj.container = container;
		obj.slide = slide;
		obj.options = options;
		this.init();
	}
	Slide.prototype.init = function(){
		if(obj.options.type == "horizental") {
			obj.slide.each(function(i){
				console.log($(this));
			});
		}
		else if(obj.options.type == "vertical") {

		}
	};
	return Slide;
}());


