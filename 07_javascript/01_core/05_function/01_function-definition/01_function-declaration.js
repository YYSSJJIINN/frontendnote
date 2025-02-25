/* 01. function declaration (함수 선언문) */

// 함수 선언부에서 함수 이름은 생략할 수 없다.
function hello(name) {
    return `${name}님 안녕하세요!`;
}

// 함수 호출
console.log(hello('유관순'));   //유관순님 안녕하세요!
console.log(hello());           //undefined님 안녕하세요! 전달인자를 전달하지 않아 name 파라미터는 undefined로 초기화 됨.
console.log(hello);             //[Function: hello] 함수 자체를 참조하면 함수 정의 코드 자체를 출력함.
                                // 브라우저와 콘솔 환경에서 실행 했을 때 출력되는 결과가 다르다.
// 브라우저 환경에서는 함수 정의 코드 자체를 출력하지만, 콘솔 환경에서는 함수 정의 코드 자체를 출력하지 않는다.

/*
JS 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 식별자를 암묵적으로 생성하고,
그곳에 함수 객체를 할당한다.
즉, 함수는 함수 이름으로 호출하는 것 처럼 보이지만, 실제로는 함수 객체를 가리키는 식별자로 호출하는 것이다.
*/

/*
아래와 같은 함수 선언문이 있을 때,
function hello(name) {
    return `${name}님 안녕하세요!`;
}
아래는 암묵적으로 생성되는 코드다.
var hello = function (name) {
    return `${name}님 안녕하세요!`;
};
따라서 hello는 함수 이름이 아니라 함수 객체를 가리키는 식별자명이다.
console.log(hello('홍길동')); ----> 식별자 hello를 호출했더니 함수가 응답한 격임.
*/