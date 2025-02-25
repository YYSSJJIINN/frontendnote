/* 01. Global Object (전역 개체)
코드가 실행되기 이전 단계에 JS 엔진에 의해 그 어떤 객체보다도 먼저 생성되는 특수한 객체를 말한다.
(어떤 객체에도 속하지 않는 최상위 객체다.)
Node.js 환경에서는 'global'이 전역 객체이고, 브라우저 환경에서는 'window'가 전역 객체다.
전역 객체는 계층적 구조상 어떤 객체에도 속하지 않는 모든 빌트인 객체의 최상위 객체다.
(여기서 주의! 프로토타입 상속 관계의 최상위 객체라는 의미가 아니다!)
전역 객체 자신은 어떤 객체의 프로퍼티도 아니고
객체의 계층적 구조상 표준 빌트인 객체와 호스트 객체를 프로퍼티로  소유한다는 것을 말한다.
*/

console.log(global);
// console.log(window);            // Node 환경에서는 window 라는 이름의 객체는 전역 객체로 존재하지 않는다.

/* 빌트인 전역 프로퍼티 */
// 1. Infinity : 무한대를 나타내는 숫자 값
// 전역 프로퍼티는 global을 생략하고 참조할 수 있다. (즉, 지금까지 이렇게 사용해왔던 것이다.)
console.log('---------- 1. Infinity ----------');

console.log(global.Infinity);                       // Infinity
// console.log(window.Infinity);    // Node 환경에서는 global 전역객체를 사용해야 한다.
console.log(global.Infinity === Infinity);          // true

console.log(typeof global.Infinity);                // number
console.log(typeof Infinity);                       // number
console.log(typeof -(global.Infinity));             // number
console.log(typeof -Infinity);                      // number

// 2. NaN : 숫자가 아님(Not a Number)을 나타내는 숫자 값
// Number.NaN 프로퍼티와 같다.
console.log('---------- 2. NaN ----------');
console.log(global.NaN);            // NaN
console.log(Number('abc'));         // NaN
console.log(10 * 'abcf');           // NaN
console.log(typeof NaN);            // number

// 3. undefined : 원시 타입 undefined 
console.log('---------- 3. undefined ----------');
console.log(global.undefined);               // undefined
let nothing;
console.log(nothing);                        // undefined
console.log(typeof undefined);               // undefined
