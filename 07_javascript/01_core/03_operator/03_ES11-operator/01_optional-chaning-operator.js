/* 03. optional-chaning-operator(옵셔널 체이닝 연산자)
ES11 (ECMASCriopt2020)에서 새롭게 도입된 연산자로, 좌항의 피연산자가 null 또는 undefined인 경우
undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 그대로 이어나간다.
*/

// var obj = null;
var obj = {val:10}

// 앞에서는 단축 평가를 사용해 아래와 같이 표현했음.
// var someVal = obj && obj.val;

// 옵셔널 체이닝 연산자 활용:
var someVal = obj?.val;

console.log(someVal);

// 단, 빈 문자열과 같은 Falsy한 값이 false로 평가되는 경우 옵셔널 체이닝 연산자는
//의도대로 동작하지 않을 것이다.
var str = '';

var len = str?.length;
console.log(len);
