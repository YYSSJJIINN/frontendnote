/* 01. Object의 prototype 프로퍼티
Object는 JS에서 객체를 생성할 때 사용되는 '내장 객체생성자 함수(built-in object constructor function)'다.
이 생성자 함수의 prototype 속성은 toString(), hasOwnProperty() 등의 다양한 메서드를 포함하는 객체 Object.prototype을 참조한다.
객체 리터럴 또는 new Object() 생성자 함수를 호출해 객체를 생성하면
생성된 객체 내부 [[Prototype]] 프로퍼티는 Object.prototype 객체를 참조하게 된다.
따라서 새롭게 생성되는 JS의 모든 객체는 Object.prototype 객체에 정의된 메서드를 상속받아 사용할 수 있다.
이러한 매커니즘을 기반으로 JS는 객체 간 프로토타입 기반 상속을 구현해냈다.
*/

// 객체 리터럴 방식으로 obj 객체 생성
// 하지만 내부적으로는 enw Object() 생성자함수를 호출해 버린다.

const obj = {};

console.log(obj.__proto__ === Object.prototype);            // true
console.log(obj.toString === obj.__proto__.toString);       // true
console.log(obj.toString === Object.prototype.toString);    // true