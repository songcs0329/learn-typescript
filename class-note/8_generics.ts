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