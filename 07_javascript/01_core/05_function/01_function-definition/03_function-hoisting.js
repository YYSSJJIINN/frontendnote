/* 03. function hoisting (함수 호이스팅) */

// 함수 참조
console.log(hello); //[Function: hello] //얘가 function hello(name)에게 훅을 건다.
console.log(hi);    //undefined

// 함수 호출
console.log(hello('홍길동'));   //홍길동님 안녕하세요!
console.log(hi('홍길동'));      //TypeError: hi is not a function

// 함수 선언문 : 반드시 함수 이름을 정의해야함.(그래야 식별자가 생성되고, 익명 함수는 선언할 수 없다.)
function hello(name) {  //console.log(hello);한테 훅이 걸렸다.
    return `${name}님 안녕하세요!`;     //홍길동님 안녕하세요!
}

// 함수 표현식 : 함수 이름을 생략할 수 있다.
var hi = function(name) {
    return `${name}님 하이~`;
}

console.log(hi);
console.log(hi)('홍길동');

/*
함수 선언문은 런타임 이전 JavaScript 엔진에 의해 먼저 실행된다.
따라서 함수 선언문 이전에 함수를 참조하거나 호출할 수 있는 것이다.
함수 선언문이 코드의 선두로 끌어올려진 것처럼 동작하는 JavaScript 고유의 특징을 '함수 호이스팅'이라 한다.
(참고; hoist : (밧줄이나 도구를 이용해) 들어[끌어]올리다.)

변수 할당문의 값은 할당문이 실행되는 시점,
런타임에 평가되는 구문으로 함수 표현식의 함수 리터럴도 할당문이 실행되는 시점에 평가되어 함수 객체가 생성된다.
따라서 함수 표현식으로 정의한 함수는 함수 호이스팅이 발생하지 않기 때문에
반드시 함수 표현식 이후에 참조/호출 해야한다.
*/