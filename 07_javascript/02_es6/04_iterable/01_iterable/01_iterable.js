/* 01. iterable (이터러블)
ES6 이전의 순회 가능한 데이터 컬렉션, 배열, 문자열, 유사 배열 객체, DOM 컬렉션 등은
통일된 규약 없이 for문, for-in문, forEach 메서드 등 다양한 방법으로 순회할 수 있었다.

ES6에서는 순회 가능한 데이터 컬렉션을 '이터레이션 프로토콜'을 준수하는 이터러블로 통일하여
for-of문, 스프레드 문법, 배열 구조분해 할당의 대상으로 사용할 수 있도록 일원화 하였다.
*/

/* for-of 루프는 '반복 가능한(iterable)' 객체를 대상으로만 동작할 수 있다.
여기서 '반복 가능한 객체'란, Symbol.iterator 메서드를 구현하여
자기 자신의 반복자(iterator) 객체를 반환할 수 있는 객체를 의미한다.
*/
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

/* for-of 반복문을 최초로 호출하면 Symbol.iterator 메서드가 호출된다.
Symbol.iterator를 추가한 뒤 1~10까지의 숫자가 출력된다.
*/
for (let num of myRange) {
    console.log(num);
}