/* 02. 빌트인 객체들의 prototype 프로퍼티
Function, String, Number 등을 비롯한 내장 객체들 역시 prototype 프로퍼티에 메서드를 저정하고 있다.
모든 내장 프로토타입의 상속 트리 꼭대기에는 Object.prototype 객체가 있어야 한다고 규정한다.
*/

const num = new Number(100);

// num은 Number.prototype을 상속받았다.
console.log(num.__proto__ === Number.prototype);                // true

// num은 Object.prototype을 상속받았다.
console.log(num.__proto__.__proto__ === Object.prototype);      // true

// 프로토타입 체인의 마지막은 null이다.
console.log(num.__proto__.__proto__.__proto__);                 // null

/* Object.prototype에도, Number.prototype에도 그리고 기타 빌트인 함수에도 toString 메서드가 존재한다.
하지만, 프로토타입 체인 상 가까운 곳에 있는 메서드를 우선적으로 사용하게 된다.
따라서 아래에서는 Number.prototype에 있는 toString 메서드를 사용한다.
*/
console.log(num);                   //[Number: 100]
// 우린 그냥 100이라는 숫자를 보고 싶으므로, 문자열로 바꿔달라는 뜻에서 toString를 입력해준다.
console.log(num.toString());        //100

// 내장 프로토타입은 수정 가능하다.
String.prototype.hello = function() {
    console.log(`hello, ${this}~!`)
}

"자바스크립트".hello();             //hello, 자바스크립트~!

/* 내장 프로토타입의 메서드를 빌려와 새로운 메서드를 저으이하는 것도 가능하지만 되도록 사용하지 않는 것을 권장한다.
내장 프로토타입은 새로 명세서에 등록된 기능을 사용하고 싶은데 JS 엔진에는 이 기능이 아직 구현되어있지 않을 때만 변경하는게 좋다.
그렇지 않으면 개발자가 의도치 않은, 또는 원하지 않는, 예상치 못한 결과를 얻을 수 있다.
*/
const foo = {
    0: "Hello",
    1: "JavaScript",
    length: 2
}

foo.join = Array.prototype.join;

console.log(foo.join(','));             //Hello,JavaScript