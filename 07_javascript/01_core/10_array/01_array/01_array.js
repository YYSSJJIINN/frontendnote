/* 01. Array (배열)
배열은 여러개의 값을 순차적으로 나열한 자료구조다.
*/

/* 1. 배열 리터럴을 통해 배열 생성 */
console.log('---------- 1. 배열 리터럴을 통해 배열 생성 ----------');

const arr = ['바나나', '사과', '딸기']
console.log(arr);               // [ '바나나', '사과', '딸기' ]
console.log(typeof arr);        // object. 참고로, 배열의 타입은 object다. 

/* 2. Array() 생성자 함수를 통해 배열 생성 */
console.log('---------- 2. Array() 생성자 함수를 통해 배열 생성 ----------');

// 전달인자 0개 : 빈 배열 생성
const arr2 = new Array();
console.log(arr2); 

// 전달인자 1개 : length 프로퍼티 값이 전달인자 값을 갖는 배열 생성
const arr3 = new Array(10);
console.log(arr3);

// 전달인자 2개 이상 : 전달인자들을 요소로 갖는 배열 생성
const arr4 = new Array(1, 2, 3);
console.log(arr4); 

/* 3. Array.of() 메서드를 통해 배열 생성 */
console.log('---------- 3. Array.of() 메서드를 통해 배열 생성 ----------');

// 전달된 전달인자들을 요소로 갖는 배열 생성(전달인자 개수 상관 X)
console.log(Array.of(10));
console.log(Array.of(1, 2, 3));
console.log(Array.of('hello', 'js', 'html', 'css'));

/* 배열의 요소는 자신의 위치를 나타내는 인덱스를 가지며 배열의 요소에 접근할 때 사용된다.
요소에 접근할 때에는 대괄호 표기법을 사용한다.
*/
console.log(arr[0]);        // 바나나
console.log(arr[1]);        // 사과
console.log(arr[2]);        // 딸기
console.log(arr[3]);        // 없는 요소를 참조하면 undefined를 반환한다.

// 배열은 요소의 개수, 즉 배열의 길이 상태를 저장하는 length 프로퍼티를 기본적으로 가지고 있다.
console.log(arr.length);    // 3

// 배열은 인덱스와 length 프로퍼티를 갖고 있기 때문에 편하게 for 문을 적용해 요소들에 순차적으로 접근할 수 있다.
for(let i = 0; i < arr.length; i++) {
    console.log(`arr 배열의 ${i}번 요소:`, arr[i]);
}

/* 배열의 자료형은 array가 아니라 object다. (array라고 하는 자료형은 없음.)
따라서 일반 객체와 배열을 구분할 때 length 프로퍼티의 유무를 확인하면 쉽다.
(+@로 순서를 갖는 프로퍼티도 존재한다.)
*/