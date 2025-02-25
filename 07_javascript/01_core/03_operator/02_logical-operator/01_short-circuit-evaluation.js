/* 02. logical-operator(논리 연산자) 
||(OR), &&(AND), !(NOT) 의 논리 연산자는 피연산자를 논리 연산한다.
*/

/* 01_short-circuit evaluation(단축 평가)
표현식을 평가하는 도중 평가 결과가 확정 된 경우 나머지 평가 과정을 생략하는 것 
*/

// OR, AND 연산자 표현식의 결과는 때로는 불리언 값이 아닐 수도 있다.

// OR의 경우 'apple'이 이미 Truthy 값이여서 true로 평가되고 
// 논리 연산의 결과를 결정한 첫 번째 피연산자 apple을 그대로 반환한다.
console.log('apple' || 'banana');   // apple
console.log(false || 'banana');     //banana
console.log('apple' || false);      //apple

// AND의 경우, 좌항 우항 모두 확인해봐야 하므로
//논리연산의 결과를 결정하는 두 번째 피연산자 banana를 그대로 반환한다.
console.log('apple' && 'banana');  //banana
console.log(false && 'banana');     //false
console.log('apple' && false);      //false

// 단축 평가를 사용하면 if문을 대체할 수 있다.
var num = 1;

if(num % 2 == 0) {
    console.log('짝수');
} else {
    console.log('홀수');
}

num % 2 == 0 || console.log('홀수');     //홀수
num % 2 == 0 && console.log('짝수');     //실행만 되고 출력은 안된다.
console.log('여기까지');

/*
객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고(마치 Java의 null 체크와 같음)
프로퍼티를 참조할 때 단축 평가를 유용하게 사용할 수 있다.
*/
var obj = null;
// var obj = { val:10};
//둘 중 하나 주석 해제 해야 출력가능

//TypeError: Cannot read properties of null (reading 'val')
// var someVal = obj.val;

/*
obj가 Falsy(null 또는 undefined)이면 단축 평가가 실행되어 좌항인 obj를 그대로 반환,
obj가 Trhuthy한 값이면 우항인 obj.val을 반환.
*/
var someVal = obj && obj.val;
console.log(someVal);