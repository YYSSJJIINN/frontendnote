/* 02. let
var 키워드의 단점을 보완하고자 ES6에서 새로운 변수 선언 키워드인 let과 const가 도입되었다.
*/

// 1. 변수 중복 선언 금지
/* let이나 const 키워드로 선언된 변수는 동일 스코프 내에서 중복 선언을 허용하지 않는다. */
let msg = '안녕하세요?';
// let msg = '반갑습니다!';

// 2. 블록 레벨 스코프
/* let 키워드로 선언한 변수는 모든 코드블록(함수, if, for, while, try/catch 등)을 지역 스코프로 인정해준다. */
let i = 0;
for(let i = 0; i < 10; i ++) {
    console.log(`지역변수 i: ${i}`)
}
console.log(`전역변수 i: ${i}`)

// 3. 변수 호이스팅
/* let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 행동한다.
var 키워드는 선언 단계와 초기화 단계가 함께 진행되지만,
let 키워드는 선언 단계와 초기화 단계가 분리되어 진행되기 때문이다.
따라서 선언은 되었지만 초기화가 되지 않아 참조 시 오류를 발생시켜준다. */
// console.log(test);
// var test;       //선언은 했는데 초기화를 안했기 때문에 들어 있는 값은 undefined이다.
// let test;       //ReferenceError: Cannot access 'test' before initialization

// 하지만, 변수 호이스팅이 발생하지 않는 것은 아니다.
let test2 = 1;
console.log(test2);     //1

// let 키워드를 사용해도 변수 호이스팅이 발생하기 때문에 지역변수 test2의 선언이 먼저 일어나게 되어
// 전역변수 test2를 참조하지 못하고 오류가 발생해버린다.
if(true) {
    //ReferenceError: Cannot access 'test2' before initialization
    // console.log(test2);
    let test2 = 2;
}