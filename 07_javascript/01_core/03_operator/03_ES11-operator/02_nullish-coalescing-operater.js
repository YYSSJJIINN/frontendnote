/* 02_nullish-coalescing-operator(null 병합 연산자) 
ES11(ECMAScript2020)에서 도입된 연산자로 좌항의 피연산자가 null 또는 undefined인 경우
우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
변수에 기본 값을 설정할 때 유용하다. 
*/

var test = null ?? '기본 값';   //좌항에 null이 적혀있으므로 var test에는 '기본 값'이 반환되어 출력된다.
console.log(test);

// null 병합 연산자 이전에는 논리연산자 ||를 사용한 단축 평가로 변수에 기본 값을 설정했다.
// 단, 빈 문자열과 같은 Falsy 값을 false 취급해서 생기는 문제가 있다.
// 빈 문자열도 유효하게 처리하고 싶지만 기본 값 문자열이 대입 된다.
var value1 = '' || '기본 값';
console.log(value1);
// null 병합 연산자는 null, undefined가 아닐 경우 그대로 반환한다.
var value2 = '' ?? '기본 값';   //좌항에 빈 문자열''(공백조차 아닌 아무것도 입력안된것.)이 적혀있으므로 var value2에는 '기본 값'이 반환되어 출력된다.
console.log(value2);