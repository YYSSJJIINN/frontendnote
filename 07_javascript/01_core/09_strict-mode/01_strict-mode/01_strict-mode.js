/* 01. Strict Mode (엄격 모드) */

function test() {
    // 암묵적으로 x가 전역 변수로써 선언되어버린다.
    x = 10;
}

test();

/* 엄격 모드에 대해서 아직 모르고 있던 상태라면 아래 x는 존재하지 않는 변수이기 때문에 참조 에러가 발생할 것이다.
하지만 실제로 출력해보면 10이 출력된다.
x 변수를 선언한 적 없지만, 윗 줄에서 test 함수를 호출하는 바람에 전역 변수로써 선언된 것이다.
*/
console.log(x);

/* 개발자의 의도와 관계 없이 발생한 암묵적 전역은 오류를 발생시키는 원인이 될 수 있으므로
반드시 var, let, const 키워드를 사용해 변수를 정의해야 한다.
이와 같은 잠재적 오류 발생을 근본적으로 막고자 ES5부터 엄격 모드(strict mode)가 추가되었다.
그렇기 때문에 ES6에서 도입된 클래스와 모듈은 기본적으로 strict mode가 적용되는 것이 디폴트다.
*/

/* ESLint와 같은 린트 도구를 사용해도 유사한 효과를 얻을 수 있다.
정적 분석 기능을 통해 소스코드를 실행하기 전에 소스코드를 스캔하여
문법적 오류만이 아니라 잠재적 오류까지 찾아내고 오류의 원인을 리포팅해주는 유용한 도구다.
*/