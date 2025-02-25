/* 03. length 프로퍼티 */

console.log([].length);         // 0

// length 프로퍼티 값은 배열 객체의 '총 프로퍼티 개수 -1개' 이다.
const arr = [1, 2, 3, 4, 5];
console.log(arr.length);        // 5

arr.push(60);                   // push : 인자로 전달된 값을 마지막 요소로 추가
console.log(arr);               // [ 1, 2, 3, 4, 5, 60 ]
console.log(arr.length);        // 6

arr.pop();                      // pop : 마지막 요소를 제거
console.log(arr);               // [ 1, 2, 3, 4, 5 ]
console.log(arr.length);        // 5

// length 프로퍼티를 조작할 수도 있다.
arr.length = 3;                 // 기존 length보다 작은 값을 입력하면 배열의 길이가 줄어든다.
console.log(arr);               // [ 1, 2, 3 ]
console.log(arr.length);        // 3

arr.length = 10;
console.log(arr);               // [ 1, 2, 3, <7 empty items> ]
console.log(arr.length);        // 10

/* 희소 배열(Sparse Array)
JS는 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 배열을 문법적으로 허용해주는데
이를 희소 배열이라고 부른다.
JS 문법상으로는 허용해줌. 특별한 목적이 있는게 아닌 이상 특별히 권장되는 방법은 아니다.
*/
const sparse =  [, 2, , 4];

console.log(sparse);            // [ <1 empty item>, 2, <1 empty item>, 4 ]
console.log(sparse.length);     // 4
console.log(Object.getOwnPropertyDescriptors(sparse));
