/* 01_String
표준 빌트인 객체인 String은 원시 타입인 문자열을 다룰 때 유용한 프로퍼티와 메서드를 제공한다. */

// String은 생성자 함수 객체다. new 연산자와 함께 호출하여 String 인스턴스를 생성한다.
const obj = new String();
console.log(obj);                   // [String: ''] : 인수 전달하지 않으면 빈 문자열을 할당한 객체 생성
console.log(typeof obj);            // object

const obj2 = new String('홍길동');
console.log(obj2);                  // [String: '홍길동'] : 인수로 문자열 전달 시 전달 받은 문자열 할당
console.log(typeof obj2);           // object

// String은 length 프로퍼티(문자열의 문자 개수)와 
// 인덱스를 나타내는 숫자 형식의 문자열을 프로퍼티 키로, 각 문자를 프로퍼티 값으로 가진다
console.log(obj2.length);           // 3 : 배열의 엘리먼트 개수
console.log(obj2[0]);               // 홍

// 단, 문자열은 원시 값이므로 변경 불가. 배열처럼 생겼지만 진짜 배열은 아니므로 변경 불가능.
obj2[0] = '김';         // 에러는 발생하지 않음
console.log(obj2);      // [String: '홍길동']

// 문자열이 아닌 값을 인수로 전달했을 경우 문자열로 강제 변환된다
// 원래 new를 사용하면 String 객체가 생성되는데 이 때는 문자열로 강제변환
const obj3 = new String(100);
const obj4 = new String(null);
console.log(obj3[0]);   // 1
console.log(obj4[0]);   // n

// new 연산자를 사용하지 않고 호출하면 String 인스턴스가 아닌 문자열을 반환하므로
// 명시적 타입 형변환에 활용 가능 (02_variable > 04_explicit-coercion > 01_convert-to-string)