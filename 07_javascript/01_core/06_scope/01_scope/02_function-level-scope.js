/* 02. Function-level-scope(함수 레벨 스코프) 
C, Java 등 대부분의 프로그래밍 언어는 함수 몸체만이 아니라 
모든 코드 블록(if, for, while, try/catch 등)이 지역 스코프를 만드는 
블록 레벨 스코프(block level scope)를 가진다.
하지만 var 키워드로 선언 된 변수는 오로지 함수의 코드 블록(함수 몸체)만을 지역 스코프로 
인정하는 함수 레벨 스코프(function level scope)를 가진다.
ES6에서 도입된 let, const 키워드는 블록 레벨 스코프를 지원한다.
*/

// 함수 안에 있지 않고, 함수 밖에서 var 키워드로 선언한 변수는 모두 전역 변수다.
var i = 0;

/* for문 내에서 사용할 변수 i를 var 키워드로 선언한다.
그러나 이미 이 변수 i는 전역 변수로 선언 되어 있기 때문에 중복 선언한 셈이다.
*/
//Java의 것과 다르게 JavaScript는 for문의 var i = 0와 전역변수의 것과 동일존재다.
for(var i = 0; i < 10; i++) {}

// 따라서 i값을 출력해보면 0이 아니라 for문에서 증감식으로 인해 조작된 10이 출력된다.
console.log(i);     //10이 나오는 이유는 i < 10에서 10까지 뽑고 종료되기 때문이다.