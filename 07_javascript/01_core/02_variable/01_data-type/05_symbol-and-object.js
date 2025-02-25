/* 05. symbol과 object객체 */

/* symbol 타입
심벌은 ES6에서 추가된 7번째 데이터 타입으로, 변경 불가능한 원시 타입의 값이다.
다른 값과 중복되지 않는 유일무이한 값으로 이름 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다.
심벌 이외의 원시 값은 리터럴을 통해 생성하지만, 심벌은 Symbol() 함수를 호출해 생성할 수 있다.
*/

var key1 = 'apple';
var key2 = 'apple';

console.log(key1 == key2);
console.log(key1 === key2);
console.log(typeof key1);
console.log(typeof key2);

var smb1 = Symbol('apple');
var smb2 = Symbol('apple');

console.log(smb1);
console.log(smb2);
console.log(typeof smb1);
console.log(typeof smb2);

console.log(smb1 == smb2);
console.log(smb1 === smb2);

/* 지금은 symbol이 데이터 타입의 한 종류라고만 이해하고 넘어가도 좋다.
symbol에 대한 자세한 내용은 ES6 챕터에서 더 자세히 다룰 예정이다.
*/

//리터럴 객체 생성(빈 객체)
var obj = {};
console.log(obj);

//이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[smb1] = 'apple';
obj[smb2] = 'apple';

console.log(obj);
console.log(obj[smb1]);
console.log(obj[smb2]);

/* object 타입
JavaScript의 데이터 타입은 Java와 비슷하게 원시(primitive) 타입과 객체(object) 타입으로 구분할 수 있다.
JavaSctipt는 객체 기반의 언어이며, JavaSctipt를 이루고 있는 거의 모든 것이 객체다.
number, string, boolean, null, undefined, symbol 6가지 데이터 타입 이외의 값은 모두 객체 타입이라고 보면된다.
예를들어 Java에서는 객체, 함수, 배열 등을 모두 객체로 취급하지만,
JavaSctipt에서는 함수를 제외한 나머지는 모두 객체로 취급한다.
*/