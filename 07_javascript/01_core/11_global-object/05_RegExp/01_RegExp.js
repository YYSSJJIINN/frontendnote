/* 01. Regular Expression(정규 표현식)
정규 표현식은 일정한 '패턴'을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어*formal language)다.
정규 표현식은 대부분의 프로그래밍 언어와 코드 에디터에 내장되어 있다.
문자열을 대상으로 한 패턴 매칭 기능을 제공하므로 예를 들어 회원 가입 때 필요한
사용자가 입력한 비밀번호의 패턴 확인, 전화번호의 유효성 확인 등의 기능에서 판별식으로 유용하게 활용할 수 있다.
*/

// 검색 대상 문자열
const target = 'JavaScript';

// 1. 정규 표현식 생성 : 리터럴 방식
// /pattern/ 플래그를 사용한다.
let regexp = /j/i;          // 패턴 : j, 플래그 : i ---> 대소문자 구별 없이를 의미.

// 2. 정규 표현식 생성 : 생성자함수 호출 방식
regexp = new RegExp(/j/i);  // ES6부터 가능한 표현

// 기본 문법 : new RegExp(pattern[, flags]); ,가 들어갔다는 것은 매개변수가 2개라는 뜻.
regexp = new RegExp(/b/, 'i');
// 대소문자 구별없이 b라는 문자가 네가 전달한 target에 있는지 확인하고 'JavaScript'에 없으니까 false.
console.log(regexp.test(target));