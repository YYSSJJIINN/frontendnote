// 이 파일은 브라우저에서 실행해볼 것을 권장
/* 02. 함수의 prototype 프로퍼티와 constructor 프로퍼티
개발자가 의도적으로 할당하지 않더라도 JS의 모든 함수는 기본적으로 "prototype"이라는 프로퍼티를 갖는다.
여기서 constructor 프로퍼티는 함수 자기 자신을 참조한다.
*/

// 함수를 정의하기만 해도 디폴트 프로퍼티인prototype 프로퍼티가 정의된다.
function Student() {}

// Student 함수의 prototype 프로퍼티 객체의 constructor 프로퍼티는
// Student 함수 자기 자신을 참조.
console.log(Student.prototype.constructor == Student);

// new 연산자와 함께 Student 생성자함수를 호출해 객체를 생성.
let student = new Student();

// student 객체는 constructor 프로퍼티가 없기 대문에
// [[Prototype]] 프로퍼티를 통해 Student 함수의 prototype 프로퍼티 객체의 constructor 프로퍼티를 참조.
console.log(student.constructor == Student);//true
