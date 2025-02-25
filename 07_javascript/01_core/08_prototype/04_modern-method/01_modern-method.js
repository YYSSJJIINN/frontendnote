/* 01. 모던 메서드
지금까지 수업을 진행하면서 가독성과 직관성을 위해 [[Prototype]] 숨김 프로퍼티를 참조할 때 __proto__를 사용했다.
그러나 이는 레거시 방법으로, 모던 자바스크립트에서는 이 참조 대신 다른 방법을 사용한다.
즉, 프로토타입 접근 시 __proto__ 대신 Object.getPrototypeOf() 또는 Object.setPrototypeOf() 메서드를 사용한다.
*/

const user = {
    activate: true
}

/* Object.create(proto):
[[Prototype]] 숨김 프로퍼티가 proto를 참조하는 빈 객체를 생성함.
*/
const student = Object.create(user);            //= student.__proto__ = user
console.log(student.activate);                  // true

/* Object.setPrototypeOf(obj, proto):
obj의 [[Prototype]] 숨김 프로퍼티를 proto를 참조하도록 설정.
*/
// 위에서 user 객체를 상속받도록 student 객체를 생성했는데, 이제는 빈 객체를 상속받도록 변경됨.
Object.setPrototypeOf(student, {});//= student.__proto__ === user
console.log(student.activate);                                  //undefined
console.log(Object.getPrototypeOf(student) === user);           //false

/* [[Prototype]] vs. prototype vs. __proto__
1. [[Prototype]]
    - 함수를 포함한 JS의 모든 객체가 가지고 있는 숨김 프로퍼티로, null 또는 다른 객체를 참조한다.
    - 객체의 경우: 자신을 생성해준 부모 역할을 하는 프로토타입 객체를 가리킴 (즉, 객체.__proto__)
    - 함수의 경우: 함수 자신을 생성해준 부모 역할을 하는 프로토타입 객체를 가리킴 (즉, 함수.prototype)
    - [[Prototype]]은 읽기 전용 프로퍼티라서 직접 접근하거나 수정 불가능하기 때문에 __proto__나
        모던 메서드인 Object.getPrototypeOf() 또는 Object.setPrototypeOf()를 사용해야 한다.
2. prototype
    - 함수 객체만 가지고 있는 프로퍼티로, 디폴트 프로퍼티다.
    - 특히, 생성자 함수로 생성하는 모든 객체가 공유할 수 있는 프로퍼티나 메서드를 ㅓㅈㅇ의해놓을 때 주로 사용된다.
    - 생성자 함수로 인스턴스가 생성되면 해당 인스턴스의 [[Prototype]]은 생성자 함수의 prototype 프로퍼티를 참조하게 된다.
3.__proto__
    - 과거에 특정 객체의 프로토타입으로 접근하기 위해 사용되던 일종의 getter/setter 메서드다.
    - 현재는 '비표준 접근자 프로퍼티'로 간주된다.
    - 따라서 ES6부터는 표준화된 방법인 Modern Method를 사용하도록 권장되고 있다.
*/