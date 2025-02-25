/* 02. Spread Syntax (스프레드 문법; 전개 문법)
rest parameter처럼 매개변수 목록을 배열로 가져오는 것과는 반대로 배열을 통째로 매개변수에 넘겨주는 기능이다.
하나로 뭉쳐있는 여러 값들의 집합을 전개(spread)해서 각각의 개별적인 값들의 목록으로 만든다.
사용 대상은 for-of 문으로 순회할 수 있는 '이터러블'에 한정된다.
*/

console.log('가장 큰 값:', Math.max(10, 30, 20));       // 30

let arr = [10, 30, 20];
console.log('가장 큰 값:', Math.max(arr));              // NaN

console.log('가장 큰 값:', Math.max(...arr));           // 30

/* Math.max()는 배열이 아닌 숫자 목록들을 인자로 받기 때문에 배열을 전달하면 원하는대로 동작하지 않는다.
이와 같은 경우 스프레드 문법을 사용할 수 있다.
함수를 호출할 때, ...[배열] 형태로 매개변수를 전달하면 배열이 전달인자 목록으로 전개된다.
*/

let arr1 = [10, 30, 20];
let arr2 = [100, 300, 200];

// 배열 객체 여러 개 전달 가능
console.log(`가장 작은 값 : ${ Math.min(...arr1, ...arr2) }`);

// 일반 값과 혼합해서 사용 가능
console.log(`가장 작은 값 : ${ Math.min(1, ...arr1, 2, ...arr2, 3) }`);

// 배열을 병합시킬 때도 유용하게 사용할 수 있다. (concat 메서드보다 간결하다.)
let merged = [0, ...arr, 2, ...arr2];
console.log(merged);

// 이터러블 배열로 변환
let str = "JavaScript";
console.log([...str]);      // 손쉽게 문자열을 배열로 바꿀 수 있다.