/* 03. 이터러블과 유사 배열
- 이터러블 : 메서드 Symbol.iterator가 구현되어 프로퍼티로 가지고 있는 객체
- 유사 배열(array-like) : 인덱스와 length 프로퍼티가 있어서 배열처럼 보이는 객체.

이터러블이면서 유사배열일 수 있고, 이터러블 객체라고 해서 유사 배열이 아닐 수 있으며,
유사 배열 객체라고 해서 이터러블 객체인 것은 아니다.
(즉, 별도의 개념이며 인간의 관점에서 그저 생긴것이 비슷하게 보일 뿐이다.)
이터러블과 유사 배열은 배열 메서드를 사용할 수 없어 불편할 때가 있는데
Array.from 메서드를 사용해 진짜 배열로 변경할 수 있다.
*/

// 1. 유사배열 객체를 진짜 배열로 변환
let arrayLike = {
    0: "요즘따라",
	1: "배열인듯",
	2: "배열아닌",
	3: "배열같은너",
	length: 4
};

// 유사 배열 객체는 진짜 배열이 아니기 때문에 배열만 사용할수 있는 Array.pop() 메서드를 사용할 수 없다.
// console.log(arrayLike.pop());

console.log(arrayLike);
let nowRealArray = Array.from(arrayLike);
console.log(nowRealArray);
console.log(nowRealArray.pop());



// 2. 이터러블을 진짜 배열로 변환
let myRange = {
    from: 1,
    to: 10
};

// Symbol.iterator 메서드를 프로퍼티로 추가한다. -> 이제 myRange 객체는 반복 가능한 이터러블 객체가 되었다!!
myRange[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

console.log(myRange);
let nowRealArray2 = Array.from(myRange);
console.log(nowRealArray2);
console.log(nowRealArray2.pop());