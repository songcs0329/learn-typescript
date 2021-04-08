// interface People {
//   name: string,
//   age: number
// }

type People = {
  name: string,
  age: number
}

// 인터페이스를 통한 타입정의
var seho: People = {
  name: 'seho',
  age: 30,
}

type MyString = string;
const myStr: MyString = 'hello';

type Todo = { id: number, title: string, done: boolean }

function getTodo(todo: Todo) {
  console.log(todo)
}