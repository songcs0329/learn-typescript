interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
	age: number;
}

function introduce(): Developer | Person {
	return {
		name: 'song',
		age: 29,
		skill: 'none'
	}
}

var song = introduce();
console.log(song.name)
// Developer, Person의 공통인 name만 접근가능

// 타입단언을 이용해 접근
if((song as Developer).skill) {
	var skill = (song as Developer).skill;
	console.log(skill);
} else if((song as Person).age) {
	var age = (song as Person).age;
	console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
	return (target as Developer).skill !== undefined;
}

if(isDeveloper(song)) {
	console.log(song.skill)
} else {
	console.log(song.age)
}