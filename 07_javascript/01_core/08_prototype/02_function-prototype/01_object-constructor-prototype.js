/* 01 Object constructor prototype(생성자함수 프로토타입)
new 연산자를 사용해 생성된 객체는 생성자 함수의 프로토타입 정보를 사용해
[[Prototype]] 프로퍼티 값을 자신의 프로토타입 객체로 설정한다.
*/

// 객체 리터럴 방식으로 user '객체' 생성
const user = {
    activate: true,
    login: function() {
        console.log('로그인 되었습니다.');
    }
};

// 생성자 '함수' Student() 정의
function Student(name) {
    this.name = name;
}

// Student 생성자 함수의 prototype 프로퍼티 값을 user 객체로 지정.
Student.prototype = user;

// new 연산자와 함께 생성자 함수를 호출해서 student '객체' 생성
let student = new Student('홍길동');

console.log(student.name);          // name 프로퍼티는 student 객체 자신의 것.
console.log(student.activate);      // activate 프로퍼티는 user 객체의 것.
student.login();                    // login 메서드는 user 객체의 것.
