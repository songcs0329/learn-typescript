// 타입단언
var a;
a = 20;
a = 'a';
var b = a as string;

// DOM API 조작
// <div id="app"></div>
var div = document.querySelector('div') as HTMLDivElement;
div.innerText