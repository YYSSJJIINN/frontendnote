/* 02. Array Higher Order Function (배열 고차 함수)
고차 함수 : 함수를 인자로 전달받거나 함수를 반환하는 함수
*/

// Array.prototype.sort : 배열을 정렬 기준으로 정렬
let numbers = [];

for (let i = 0; i < 10; i++) {
   numbers[i] = Math.floor(Math.random() * 100) + 1;
}

console.log(`정렬 전 numbers : ${numbers}`);

// 오름차순 정렬이 기본이며 정렬 후 정렬 순서를 유지함
// 배열은 기본적으로 문자열 정렬이 되므로 한자리수, 세자리수가 올바르지 않게 정렬 되는 모습을 확인할 수 있음
// => 다른 정렬 기준을 사용하려면 매개변수로 compare 함수 전달
numbers.sort();
console.log(`정렬 후 numbers : ${numbers}`);

// 숫자 오름차순 정렬
function compare(a, b) {
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}

numbers.sort(compare);
console.log('매개변수로 compare 함수 전달하여 숫자 오름차순 정렬');
console.log(numbers);

// 숫자 내림차순 정렬
// numbers.number(function(a, b){
//     return b - a;
// });
numbers.sort((a, b) => b - a);

console.log('숫자 내림차순 정렬');
console.log(numbers);



// Array.prototype.forEach : for를 대체할 수 있는 고차함수

/* 참고
함수형 프로그래밍 : 순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여
복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임
for문은 반복을 위한 변수 선언, 조건식, 증감식 등이 필요하여 함수형 프로그램이 추구하는 바와 맞지 않음
forEach 메서드는 for를 대체할 수 있는 고차함수 */

/*
    // forEach에 들어간 매개변수는 1개지만, 하필 그게 함수였기에 forEach는 고차함수가 되고,
    //함수 내부에 여러 매개변수를 사용할 수 있게 되었다.
배열.forEach(function(item, index, array){
   // 배열 요소 각각에 실행할 기능 작성

});
*/
numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(item, index, array){
    console.log(`item : ${item}`);          // 배열 요소
    console.log(`index : ${index}`);        // 배열 요소의 인덱스
    console.log(`array : ${array}`);        // 배열 자체(원본 배열)
});

// 각 요소 별로 * 10 한 값을 콘솔에 출력
numbers.forEach(item => console.log(item * 10));

// 위 람다식 복원
numbers.forEach(function(item) {console.log(item * 10);});



// Array.prototype.map : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환 값들로 구성 된 새로운 배열 반환
/*
배열.map(function(item, index, array){
   // 배열 요소 각각에 반환할 새로운 값
});
*/
// item이 true, 1, 'text' 중 하나가 될 수 있음
const types = [true, 1, 'text'].map(item => typeof item);
console.log(`types : ${types}`);            // boolean,number,string

const lengths = ['apple', 'banana', 'cat', 'dog', 'egg'].map(item => item.length);
console.log(`lengths : ${lengths}`);        // 5,6,3,3,3

// Array.prototype.filter : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환 값이 true인 요소로만 구성 된 새로운 배열 반환
const odds = numbers.filter(item => item % 2);
console.log(odds);       // [ 1, 3, 5 ]



// Array.prototype.find : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환
// 참인 요소가 존재하지 않는다면 undefined를 반환
// Array.prototype.findIndex : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫번째 요소의 인덱스를 반환
// 참인 요소가 존재하지 않는다면 -1을 반환
const students = [
    { name : '유관순', score : 90 },
    { name : '홍길동', score : 80 },
    { name : '장보고', score : 70 }
];

// 조건에 부합하는 요소를 찾을 수 있을 때:
result = students.find(item => item.name === '유관순');
console.log(result);    // { name: '유관순', score: 90 }
result = students.findIndex(item => item.name === '유관순');
console.log(result);    // 0

// 조건에 부합하는 요소를 찾을 수 없을 때:
result = students.find(item => item.name === '신사임당');
console.log(result);    // undefined
result = students.findIndex(item => item.name === '신사임당');
console.log(result);    // -1

// find, findIndex는 일치하는 요소를 찾으면 더 이상 탐색하지 않고 하나의 요소, 인덱스만 반환
// 60점 이상의 학생들을 알고 싶다면?
// filter는 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환
result = students.find(item => item.score >= 60);
console.log(result);    // { name: '유관순', score: 90 }
result = students.filter(item => item.score >= 60);
console.log(result);    // 배열 반환