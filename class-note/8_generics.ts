function logText<T>(text: T): T {
	console.log(text);
	return text;
}
logText<string>('hello'); // <인자의 타입>