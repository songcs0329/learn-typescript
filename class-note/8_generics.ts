function logText<T>(text: T): T {
	console.log(text);
	return text;
}
logText<string>('hello'); // <인자의 타입>

// 인터페이스 제네릭
interface Dropdown<T> {
	value: T;
	selected: boolean
}

// 제네릭 타입제한: 타입힌트를 추가적으로 줄 수 있다 T[]
// function logTextLength<T>(text: T[]): T[] {
// 	console.log(text.length);
// 	text.forEach(function(txtItem) {
// 		console.log(txtItem);
// 	})
// 	return text;
// }
// logTextLength<string>(['hi', 'abc'])

// 제네릭 타입제한 2 - 정의된 타입 이용하기
interface LengthType {
	length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
	console.log(text.length);
	return text;
}
// logTextLength(10) number.length 는 없다.
logTextLength({length: 10})

// 제네릭 타입제한 3 - keyof
interface ShoppingItem {
	name: string,
	price: number,
	stock: number
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
	return itemOption;
}

getShoppingItemOption("name")