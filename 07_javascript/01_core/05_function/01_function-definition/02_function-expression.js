/* 02. function expression (함수 표현식)
프로그래밍 언어는 해당 언어의 객체(또는 함수)가 다른 변수와 같이 '값으로써' 다루어질 때
"일급 객체를 갖는다"고 표현한다.
JS의 함수는 객체 타입의 값으로, 값의 성질을 갖는 객체를 일급 객체라고 부른다.
즉, 함수는 객체이고, 객체는 값의 성질을 갖을 수 있으므로 함수는 일급 객체다.
따라서 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.
*/

/*
일급 객체(first-class object)란?
즉, 함수를 단순한 명령어들의 집합으로 생각하지 않고, 다른 리터럴이나 변수처럼 값으로 취급할 수 있다.
-(함수는...) 변수에 할당 가능하다.
-(함수는...) 함수의 인자로 전달 가능하다.
-(함수는...) 함수의 반환값으로 사용 가능하다.
*/

// 함수 표현식 : 함수 리터럴로 생성한 함수 객체 자체를 변수에 할당
// 이 때, 함수 표현식에서는 함수명을 생략할 수 있다. (어차피 식별자가 존재하기 때문)
// var hello = function hello (name) {
//     return `${name}님 안녕하세요!`;
// };

var hello = function (name) {
    return `${name}님 안녕하세요!`;
};
// 함수 이름이 아닌, 함수 식별자로 호출한 것이다!
console.log(hello('홍길동'));   //홍길동님 안녕하세요!

//함수 표현식에서 함수명을 생략하지 않아도 에러가 발생하지 않는다.
//calc : 식별자
//sum : 함수명
var calc = function sum(a, b) {
    return a + b;
};

//식별자(calc)로 호출해야하는데, 함수명(sum)으로 호출하면 에러가 발생한다.
//ReferenceError: sum is not defined
//즉, sum이라는 식별자는 없다.
console.log(calc(10, 20));  //30