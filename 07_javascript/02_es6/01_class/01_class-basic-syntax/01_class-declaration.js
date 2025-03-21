/* 01. 클래스 기본 문법
동일한 종류의 객체를 여러개 생성해야 할 경우 객체 리터럴을 여러개 생성하는 방법 보다
클래스라고 하는 고용ㅇ 템플릿을 작성해 객체를 생성하는 것이 훨씬 효율적이다.
*/

/* 1. Class Declaration (클래스 선언)*/
// 함수 선언자는 function Studnet(매개변수) {} 였지만, 클래스는 매개변수라는 개념이 없다.
class Student {

    /* 1-1. 생성자 */
    /* 생성자를 통해 인스턴스를 생성하며 값을 초기화할 수 있다. (JAVA랑 역할인 비슷함)
    생성자는 1개 이상 정의될 수 없으며, 생략할 경우 암묵적으로 정의된다.
    생성자는 암묵적으로 this를 반환하기 때문에 return 구문은 생략하는 것이 정석이다.*/
    constructor(name) {
        this.group = 1;
        this.name = name;
    }

    /* 1-2. 메서드 */
    /* 1-2-1. 프로토타입 메서드 */
    introduce() {
        console.log(`안녕하세요, 저는 ${this.group}반 ${this.name}입니다.`);
    }

    /* 1-2-2. 정적 메서드 */
    // 뒷 챕터에서...
}

/*
Student 클래스를 선언한 후 new Student()를 호출하면 새로운 객체가 생성되며
전달받은 전달인자 name과 함께 constructor()가 자동으로 실행되어 "홍길동"이 this.name에 할당된다.
클래스 바디에 정의한 메서드는 기본적으로 prototype 메서드가 된다.
*/
let student = new Student('홍길동');

student.introduce();

console.log(typeof Student);// function : 클래스 선언문과 함수 선언문과 똑같다고 생각하면 된다.
console.log(Student === Student.prototype.constructor);
console.log(Student.prototype.introduce);// introduce 뒤에 ()를 안넣었으므로 함수실행이 아닌 참조다.
console.log(Object.getOwnPropertyNames(Student.prototype));// [ 'constructor', 'introduce' ] : 숨김 프로퍼티인 [[Prototype]]을 제외한 프로퍼티 목록이다.

console.log(typeof Student);   // function - 클래스는 함수의 한 종류이다.
console.log(Student === Student.prototype.constructor);   // true - 정확하게는 생성자 메서드와 동일하다.
console.log(Student.prototype.introduce);   // [Function: introduce] - 클래스 내부에 정의한 메서드는 클래스.prototype에 저장된다.
console.log(Object.getOwnPropertyNames(Student.prototype));   // [ 'constructor', 'introduce' ] - 현재 프로토타입에는 constructor와 introduce 두 개의 메서드가 있다.

/*
정리하자면, new Student()를 호출하면 Student라는 이름의 함수를 만들고 함수 본문은 생성자메서드 constructor에서 가져온다.
만약 생성자 메서드가 없으면 본문이 비워진 채로 함수가 생성된다.
introduce와 같이 클래스 내에서 정의된 메서드는 Student.prototype에 저장된다.
*/
/*
constructor(name) {}를 가지고 Student() 생성자 함수 만듬. -> function Student(name) {this.group = 1; this.name = name;}
*/

function Teacher(name) {
    this.group = 1;
    this.name = name;
}

// [ 'constructor' ] - 생성자에 대한 참조 프로퍼티만 존재함
console.log(Object.getOwnPropertyNames(Teacher.prototype));

// 동적으로 Teacher.prototype에 메서드를 추가
Teacher.prototype.newIntroduce = function() {
    console.log(`안녕하세요, 저는 ${this.group}반 ${this.name}교사 입니다.`);
}

// [ 'constructor', 'newIntroduce' ] - 프로토타입에 메서드가 동적으로 추가됨
console.log(Object.getOwnPropertyNames(Teacher.prototype));

let teacher = new Teacher('신사임당');
teacher.newIntroduce();                 // 안녕하세요, 저는 1반 신사임당교사 입니다.

/*
생성자 함수와 클래스의 차이점
1. 클래스 생성자를 new와 함께 호출하지 않으면 에러가 발생한다.
    함수 내부 프로퍼티 [[IsClassConstructor]] : true 가 사용 된다.
2. 클래스에 정의 된 메서드는 열거 불가하다. enumerable 플래그가 false이기 때문이다.
    따라서 for..in 으로 객체 순회 시 메서드 순회 대상에서 제외된다.
3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작한다. 
    함수 선언문 생성자 함수는 함수 호이스팅, 함수 표현식 생성자 함수는 변수 호이스팅이 발생한다.
4. 클래스는 항상 use strict 적용된다.
    클래스 생성자 안 코드는 자동으로 엄격 모드가 적용 된다. 

결론 => 클래스 문법은 생성자 함수와는 다른 새로운 객체 생성 매커니즘이다.
*/

// let student2 = Student("이순신");

for(method in student) {
    console.log(method);
}