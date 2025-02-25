/* [[Prototype]]:
자바스크립트에서 모든 객체는 '[[Prototype]]'이라는 내부 숨김 프로퍼티를 갖는다.
이 프로퍼티의 값은 null 또는 다른 객체에 대한 참조가 되는데,
이 때 [[Prototype]]에 의해 참조되는 객체를 그 객체의 '프로토타입(prototype)'이라 부른다.

프로토타입 상속:
자바스크립트에서 객체의 프로퍼티 또는 메서드에 접근하려고 할 때, 자바스크립트 엔진은 먼저 해당 객체 내부에서 프로퍼티나 메서드를 찾는다.
그러나 내부에서 찾을 수 없다면 엔진은 이제 객체의 [[Prototype]] 참조를 따라가 해당 객체의 프로토타입 내부에서 찾기 시작한다.
이러한 메커니즘을 '프로토타입 상속'이라고 한다.
(이 프로토타입 상속 메커니즘은 프로토타입 체인을 따라가 원래 접근하고자 했던 프로퍼티나 메소드를 찾을 때까지,
또는 프로토타입 체인의 끝에 도달할 때 까지 반복된다.)

프로토타입 체인:
객체의 프로퍼티나 메서드에 접근할 때의 검색 경로를 의미한다.
보통 Object.prototype에 도착했을 때 프로토타입 체인의 끝이 났다고 이야기한다.
왜냐하면 Object.prototype의 [[Prototype]]이 null이기 때문이다.
또한 프로토타입 체이닝은 순환 참조(circle reference)가 허용되지 않는다.
__proto__ 의 값은 객체 또는 null만 가능하며 다른 자료형은 무시된다.
*/

console.log('========== user 객체 ==========');

const user = {
    activate: true,
    login: function() {
        console.log('로그인 되었습니다.');
    }
};

console.log('========== student 객체 ==========');

// student(자식) 객체가 user(부모)를 상속받는 존재로 만들자.
const student = {
    passion: true
}

/* 아래 코드가 student 객체가 user 객체를 상속받게 해주는 코드다.
__proto__는 [[Prototype]]의 축약형으로 일종의 getter/setter 역할이라고 보면 된다.
그러나 __proto__는 요즘은 잘 사용하지 않는 구식 방법이지만, 호환을 위해 남겨놓은 것이다.
(수업에서는 직관적인 이해를 돕기 위해 사용할 뿐이다.)
따라서 레거시 방법이 아닌 최신 방식을 사용할 때는 Object.getPrototypeOf()이나 Object.setPrototypeOf()를 사용하는 것이 좋다.
(뒤에서 배울 예정)
*/
// 상속 받게 하는 구문
// student.__proto__=user;  // 레거시 방식
Object.setPrototypeOf(student, user);   // 최신 방식

console.log(student.passion);
console.log(student.activate);
console.log(student.login());

console.log(student.__proto__);
console.log(student.__proto__.__proto__);
console.log(user.__proto__);



const greedyStudent = {
    class: 11,
    __proto__: student      //student 객체를 상속받음.
};

console.log(greedyStudent.class);       // 자신의 프로퍼티
console.log(greedyStudent.passion);     // 부모에게 상속받은 프로퍼티
console.log(greedyStudent.activate);    // 조상에게 상속받은 프로퍼티
console.log(greedyStudent.login());     // 조상에게 상속받은 프로퍼티

/*
"student의 프로토타입은 user이다." 또는 "student는 user를 상속받았다." 라고 말할 수 있다.
프로토타입으로부터 상속받은 프로퍼티를 '상속 프로퍼티(inherited property)'라고 부른다.
(즉, 프로토타입으로부터 상속받은 프로퍼티와 원래 내가 가지고 있던 프로퍼티를 구분할 수 있다는 이야기다.)
*/
/*
Q)누군가 나에게 JavaScript가 무엇이냐고 물어본다면?
A)"프로토타입 기반의 객체 지향 프로그래밍 언어이자, 함수 지향 프로그래밍 언어다."
    이 개념은 향후 React를 배우기 위해 JS를 학습하는 입장에서 제일 중요한 부분이다.
*/