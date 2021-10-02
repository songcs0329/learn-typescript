// 타입추론 기본1
var a = 'abc';

function getB(b = 10) {
	var c = 'hi';
	return b + c;
}

// 타입추론 기본2
// interface Dropdown<T> {
// 	value: T;
// 	title: string;
// }

// var shoppingItem: Dropdown<string> = {
// 	value: 'abc',
// 	title: 'hello'
// }

// 타입추론 기본3
interface Dropdown<T> {
	value: T;
	title: string;
}
interface DetailedDropdown<K, U> extends Dropdown<U> {
	description: string;
	tag: K;
}

var detailedItem: DetailedDropdown<string, number> = {
	title: 'abc',
	description: 'ab',
	value: 123123,
	tag: 'tag',
}

// Best Common Type
var arr = [1, 2, true, false, 'abc']