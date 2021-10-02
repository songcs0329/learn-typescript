// 인터페이스
interface Developer {
	name: string;
	skill: string;
}
// interface Person {
// 	name: string
// }
class Person {
	name: string;
}

var developer: Developer;
var person: Person;
// skill이 없기때문에 할당 안됨(부분집합)
// developer = person;
// developer = new Person();

person = developer;

// 함수
var add = function(a: number) {}
var sum = function(a: number, b: number) {}
// add = sum; // b 파라미터가 더 있기때문
sum = add;

// 제네릭
interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
	data: T
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;