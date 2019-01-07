var Slide = (function(){
	//Constructor - 생성자(new Slide() 하면 아래의 함수가 실행됨)
	function Slide() {
		this.type = "Horizental Slide";
	}
	//Method - 객체 안의 함수
	Slide.prototype.getType = function(){
		return this.type;
	}
	Slide.prototype.setType = function(_type){
		this.type = _type;
	}
	return Slide; //new Slide() 호출의 리턴값
}());


/*
var Hello = (function(){
	function Hello(_name) {
		this.message = "Hello " + _name;
	}
	Hello.prototype.greeting = function(){
		return this.message;
	}
	return Hello;
}());

var hello = new Hello("booldook");
console.log(hello.greeting());
*/