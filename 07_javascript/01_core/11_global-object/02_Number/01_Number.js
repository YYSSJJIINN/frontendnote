/* 01. Number
표준 빌트인 객체인 Number는 원시 타입인 숫자를 다룰 때 유용한 프로퍼티와 메서드를 제공한다.
*/

/* Number 생성자 함수 */

const obj = new Number();       // 전달인자가 하나도 없는 상태. 전달인자를 전달하지 않을 경우, 0을 할당.
console.log(obj);               // [Number: 0]
console.log(typeof obj);        // object 객체

const obj2 = new Number(10);    // 전달인자를 전달하면 전달된 숫자를 할당.
console.log(obj2);              // [Number: 10]

const obj3 = new Number('20');  // 전달인자로 받은 문자열을 숫자로 형변환
console.log(obj3);              // [Number: 20]

const obj4 = new Number('삼십'); // 전달받은 문자열이 숫자로 형변활 할 수 없다면 NaN을 할당.
console.log(obj4);               // [Number: NaN]

/* new 연산자를 사용하지 않고 Number 생성자함수를 호출하면 object 타입이 아닌 number 타입으로 숫자를 반환한다.
따라서 명시적 타입 형변환에 활용 가능하다.
*/
const obj5 = Number(30);
console.log(obj5);              // 30
console.log(typeof obj5);       // number