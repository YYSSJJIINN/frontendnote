/* 01. 배열 구조 분해 할당
구조 분해 할당을 사용하면 배열이나 객체를 변수로 '분해'해서 사용할 수 있다.
*/

/* 01. 배열 구조 분해 할당 기본 문법 */
// 이름과 성을 요소로 갖는 기본 배열 선언
let nameArr = ['길동', '홍'];

// 기존 분해 방법
// let firstName = nameArr[0];
// let lastName = nameArr[1];

// 구조 분해 할당 적용
let [firstName, lastName] = nameArr;

console.log(firstName, lastName);
console.log(typeof firstName, typeof lastName);

// 반환값이 배열인 String.split 메서드를 활용한 예제
let [firstName2, lastName2] = 'Saimdang Shin'.split(' ');
console.log(firstName2, lastName2);

// 쉼표를 명확히 정의하여 필요하지 않은 요소는 걸러낼 수 있다.
let [first, , third] = ['한놈', '두식이', '석삼'];

console.log(first);
console.log(third);