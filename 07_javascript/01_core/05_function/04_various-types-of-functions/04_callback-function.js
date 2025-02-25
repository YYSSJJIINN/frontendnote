/* 04. Callback Function(콜백 함수)
함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수라고 부른다.
매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차 함수라고 부른다.
콜백 함수는 고차 함수에 전달되어 헬퍼 함수의 역할을 한다.
즉, 고차 함수는 콜백 함수를 자신의 일부분으로 합성한다.
*/

// 콜백 함수 #1 : 전달 받은 값을 1 증가시켜주는 함수
function increase(value) {
    return value + 1;
}

// 콜백 함수 #2 : 전달 받은 값을 1 감소시켜주는 함수
function decrease(value) {
    return value -1;
}

// 고차함수 : 전달받은 함수에 전달받은 값을 적응 시켜주는 함수
function apply(func, value) {

    /* 고차함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정해 호출한다.
    콜백 함수는 고차 함수에 의해 호출되며, 이 때 고차함수는 필요에 따라 콜백 함수에게 인자를 전달할 수도 있다.
    */
    return func(value)
}

// 아래에서 고차 함수는 apply이며,  콜백 함수는 increase, decrease이다.
console.log(apply(increase, 10)); // 11
console.log(apply(decrease, 10)); // 9

// 이름 없는 함수의 경우
// 첫 번째 전달인자는 function(value) {return value;}이고, 두번째 전달인자는 5이다.
console.log(
    apply(function(value) {return value;}, 5)
);      // 5

// 콜백 함수가 고차 함수 내부에서만 호출된다면 콜백 함수를 익명 함수 리터럴로 정의하면서
// 고차 함수에 바로 전달하는 것이 일반적인 패턴이다.
console.log(
    apply(function(value) {return value ** 2;}, 5)
);      //25
//value ** 2 : value의 2승 이라는 뜻

console.log(
    apply(function(value) {return value ** 3;}, 5)
);      //125
//value ** 3 : value의 3승 이라는 뜻

/* 함수의 변하지 않는 공통 로직은 미리 정의해두고(=고차 함수)
경우에 따라 변경되는 로직은 추상화(=콜백 함수)해서 함수 외부에서 내부로 전달하는 방식이다.
콜백 함수는 함수형 프로그래밍 패러다임뿐만 아니라
비동기 처리(이벤트, 타이머, ajax)에 활용되는 중요한 패턴이다.
또한 배열 고차 함수(map)에서도 사용 된다. */

// 배열의 정렬을 다룰 때의 예시: 여기서 정렬 기준이 callback 함수, Array.sort()가 고차 함수가 된다.
console.log([3, 2, 1, 5, 4].sort(function(left, right){ return right - left}));
//[ 5, 4, 3, 2, 1 ]
console.log([3, 2, 1, 5, 4].sort(function(left, right){ return -(right - left)}));
//[ 1, 2, 3, 4, 5 ]
console.log([3, 2, 1, 5, 4].sort(function(left, right){ return left - right}));
//[ 1, 2, 3, 4, 5 ]