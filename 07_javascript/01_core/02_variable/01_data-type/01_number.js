// ctrl + / : 한 줄 주석

/*
    ctrl + shift + / : 여러 줄 주석
    ctrl + shift + \ : 여러 줄 주석 해제
*/

/*
    data type은 값의 종류를 말하며, JavaScript(ES6)에서는 7개의 데이터 타입을 제공한다.
    - number : 숫자
    - string : 문자열
    - boolean : 논리값
    - null : 값이 없음
    - undefined : 값이 정의되지 않음
    - object : 객체
    - symbol : 고유한 식별자
*/

/* 01. 숫자 타입
자바의 경우 정수와 실수를 구분해 int, float, long, double 등과 같이 다양한 숫자 타입을 제공한다.
하지만 JavaScript의 경우 하나의 숫자(number) 타입만 존재하고 무든 수를 '실수'로 처리한다.
*/

// 정수, 실수, 음수 모두 숫자(number) 타입이다.
var integer = 10;
var double = 5.5;
var negative = -10;

console.log(integer);
console.log(typeof integer);

console.log(double);
console.log(typeof double);

console.log(negative);
console.log(typeof negative);

console.log(typeof 31);

/* == 연산자와 === 연산자
    == 연산자는 두 값이 같은지 비교하고, === 연산자는 두 값이 같은 값이면서 같은 타입인지를 모두 비교한다.
*/
console.log(10 == 10.0);    //값 비교
console.log(10 === 10.0);   //값과 타입 비교

// 두 수 모두 실수이므로 2.5가 계산된다.(나머지 없음!)
console.log(10 / 4);    //2.5

/*
숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
1. Infinity : 양의 무한대
2. -Infinity : 음의 무한대
3. NaN : 산술 연산 불가
*/

console.log(10 / 0);    //Infinity
console.log(-10 / 0);   //-Infinity
console.log(0 / 10);    //0
console.log(1 * '문자열이지롱');   //NaN

/* JavaScript는 동적 타입의 언어다.
동적 타입이란, 변수를 선언할 때 타입을 명시하지 않고, 변수에 할당되는 값에 따라 그 타입이 결정되는 것을 의미한다.
JavaScript는 모든 숫자를 64비트 부동소수점 형식으로 처리한다.
타이핑이 빠르고 코드의 양이 줄어드는 장점이 있지만, 실행시점(runtime)까지 변수의 타입이 확정되지 않기 때문에
예상치 못한 타입 관련 에러가 발생할 수 있다.
*/