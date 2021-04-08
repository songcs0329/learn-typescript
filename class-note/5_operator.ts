// function logMessage(value: any) {
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);

// union type : |(or)
var chang: string | number | boolean;
function logMessage(value: string | number) {
  // 각 타입에 따른 api 사용가능, 타입제한(타입가드)
  if(typeof value === 'number') {
    value.toLocaleString()
  }
  if(typeof value === 'string') {
    value.toString()
  }
  throw new TypeError('value must be string or number'); // value type 예외 에러처리
}

logMessage('hello');
logMessage(200);
// logMessage(true); // union type set only string, number

interface Developer {
  name: string,
  skill: string
}

interface Person2 {
  name: string,
  age: number
}

function askSomeone(someone: Developer | Person2) { // 두개의 인터페이스에 교집합만 제공
  someone.name;
  // 타입가드에 대한 별도처리 필요
  // someone.skill;
  // someone.age;
}
askSomeone({name: '개발자', skill: 'ts'}); // Developer interface
askSomeone({name: '일반인', age: 20}); // Person2 interface

// intersection type : &(and)
// var capt: string & number & boolean;
function askSomeone2(someone: Developer & Person2) { // 두개의 인터페이스에 합집합
  someone.name;
  someone.skill;
  someone.age;
}

askSomeone2({ name: '개발자2', skill: 'web dev', age: 100}); // Developer, Person2 2개 인터페이스 속성 모두 파라미터로 줘야한다.