// 숫자형 enum
enum Shoes {
	Nike,
	Adidas
}

// 문자형 enum
enum ShoesStr {
	Nike = "NIKE",
	Nb = "NB"
}

var myShoes = Shoes.Nike;
var yourShoes = ShoesStr.Nb;
console.log(myShoes, yourShoes) // 0, "NB"


// example
enum Answer {
	Yes = 'Y',
	No = 'N'
}
function askQuestion(answer: Answer) {
	if(answer === Answer.Yes) {
		console.log('say yes')
	}
	if(answer === Answer.No) {
		console.log('say no')
	}
}

askQuestion(Answer.Yes)