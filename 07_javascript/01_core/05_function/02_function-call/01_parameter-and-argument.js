/* 01. parameter & argument (매개변수 & 인수) */

// 함수 선언문
function hello(name) {      //hello라는 이름의 식별자가 암묵적으로 생성된다.

    //함수의 매개변수는 지역변수라서 함수 몸체 내부에서만 참조 가능하다.
    console.log(name);      // return 값이 없기 때문에 undefined가 반환된다.

    // 함수의 모든 전달인자는 암묵적으로 arguments 객체의 프로퍼티로서 보관된다.
    console.log(arguments);     //[Arguments] { '0': '홍길동' } 가변인자 함수 구현시 유용하게 사용된다.

    return `${name}님 안녕하세요!`;
}

// 함수의 매개변수는 결국 지역 변수이기 때문에 함수 몸체 내부에서만 참조할 수 있다.
// console.log(name);

// 함수 호출 (매개변수의 개수, 인수의 개수가 일치하는지 체크하지 않음.)
var result = hello('홍길동');
console.log(result);    // 위에서 리턴값이 없어서 반환됐던 undefined가 출력된다.

// 전달인자가 없는 경우 : 매개변수는 undefined로 초기화된다.
result = hello();       //undefined
console.log(result);

// 전달인자가 더 많은 경우 : 정의된 매개변수가 부족해서 할당되지 못한 매개변수는 무시된다.
// 모든 전달인자는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
result = hello('홍길동', '이순신');     //0번인덱스인 홍길동만 출력되고, 1번인덱스인 이순신은 그냥 무시된다.
console.log(result);

// 매개변수의 기본값 설정
function hi(name = '아무개') {
    return `${name}님 안녕~`
}

result = hi();
console.log(result);    //아무개님 안녕~

result = hi('유관순');
console.log(result);    //유관순님 안녕~

/*
매개변수의 최대 개수에 대해 명시적인 제한은 없다. (물론 메모리로 인한 물리적인 한계치는 있겠지만)
하지만 이상적인 함수는 한 가지 일(=책임)만 수행해야 하며 가급적 작게 만들어야 하므로
최대 3개 이상을 넘기지 않는 것을 권장한다.
*/
