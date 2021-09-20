// 기존 생성자 함수
function Hero(name, age) {
	this.name = name;
	this.age = age;
}

var capt = new Hero('capt', 100)

// ES6 class
class Person {
	constructor(name, age) {
		console.log('construct');
		this.name = name;
		this.age = age;
	}
}

var song = new Person('song', 29); // construct
console.log(song) // { name: 'song', age: 29 }
//기존 생성자 함수와 ES6 class 방식의 결과는 같다.