/* 03. nested-function(중첩 함수)
함수 내부에 정의 된 함수를 중첩 함수, 또는 내부 함수라고 한다.
중첩 함수를 포함하는 함수는 외부 함수라고 한다.
일반적으로 중첩 함수는 자신을 포함하는 외부 함수를 돕는 헬퍼 함수의 역할을 한다.
*/

function outer() {
    var outerVal = '외부함수입니다';

    function inner() {

        var innerVal = '내부함수입니다';
        console.log(outerVal, innerVal)
    }
    // 중첩 함수(function inner)의 외부 함수(function outer) 내에서 내부 함수 식별자(inner)를 호출
    inner();
}
// 중첩 함수의 외부 함수 식별자를 호출
outer();
