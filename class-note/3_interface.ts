interface User {
  age: number;
  name: string
}

// 변수에 인터페이스 활용
var song: User = {
  age: 29,
  name: 'song chang seok'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const capt = {
  name: 'capt',
  age: 100
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
interface sumFunc {
  (a: number, b: number): number
}

var sum: sumFunc
sum = function (a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number] : string
}

var stringArray: StringArray = ['a','b','c']
// stringArray[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string] : RegExp;
}


var regexObj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/
}

// regexObj['cssFile'] = 'a'

Object.keys(regexObj).forEach(function (value) { // regexObj의 key값으로 배열 만든 뒤 forEach...
  console.log(value)
})

// 인터페이스 확장
interface Person {
  name: string,
  age: number
}

interface Developer extends Person {
  language: string
}

var captain: Developer = {
  language: 'ts',
  name: 'captain',
  age: 100
}