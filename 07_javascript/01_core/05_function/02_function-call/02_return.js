/* 02. return(반환문) */

function hello(name) {
    console.log('이거 출력 되나? #1');
    return `${name}님 안녕하세요!`;     // 반환문

    // 반환문 이후의 코드는 실행될 수 없다.(unreachable code)
    console.log('이거 출력 되나? #2');  // 닿을 수 없는 구문 cuz, 리턴문 아래에 있기 때문에.
}

console.log(hello('유관순'));

function myFunc() {
    console.log('myFunc 호출됨...');
    // 반환문이 명시적으로 선언되지 않은 경우, 암묵적으로 undefined를 반환한다.
}

console.log(myFunc());      //return 값이 없기 때문에 undefined가 반환된다.

function myFunc2() {
    console.log('myFunc2 호출됨...');
    // 반환값을 명시적으로 선언하지 않은 경우, 암묵적으로 undefined를 반환한다.
    return;
}

console.log(myFunc2());  