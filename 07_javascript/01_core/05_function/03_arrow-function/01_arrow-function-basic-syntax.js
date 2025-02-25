/* 01. Arrow Function(화살표 함수 기본 문법)
ES6에서 도입된 화살표 함수 문법은 function 키워드 대신 화살표를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있다.
화살표 함수는 항상 '익명 함수'로 정의한다.
즉, 함수 본문이 한 줄(또는 일회용)인 간단한 함수를 작성할 때 유용하다.
*/

var message;
console.log(typeof message);    //undefined

message = function () {
    return "hello world~!";
};

console.log(typeof message);    //function
console.log(typeof message());  //string
console.log(message());         //hello world~!


// 화살표 함수 사용
// function 키워드 생략 후 화살표 기호 => 로 대체. 함수를 선언한다.
message = () => {
    return "arrow world~!";
};

console.log(message());         //arrow world~!

// 함수 몸체 내부에 명령문이 한 개만 있을 경우 중괄호를 생략 가능. (단, 명령어 두 개 이상은 생략 불가)
// 이 때, 남아있는 한 개의 명령문이 값으로써 평가될 수 있는 표현식인 명령문이라면 암묵적으로 반환(return) 해준다.
// 따라서 return 문을 생략할 수 있다.
message = () => "simple arrow world~!";//string으로 평가될 수 있기 때문에 return 빼도 된다.

console.log(message());     //simple arrow world~!

// 매개변수가 2개 이상인 경우
message = (val1, val2) => {
    return `${val1} + ${val2} = ${val1 + val2}`;//백틱`으로 감싸져 있기 때문에 string으로 치환될 수 있기에 중괄호부터 return까지 생략 가능
}
message = (val1, val2) => `${val1} + ${val2} = ${val1 + val2}`;
console.log(message('arrow', 'function'));

// 매개변수가 1개인 경우
message = val => `This is ${val}!`;
console.log(message('arrow function'));
