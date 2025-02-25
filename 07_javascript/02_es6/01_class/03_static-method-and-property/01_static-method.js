/* 03. 정적 메서드와 정적 프로퍼티 */

/* 01. static method (정적 메서드)
정적 메서드는 특정 클래스 인스턴스가 아니라 클래스 '전체'에 필요한 기능을 만들 대 사용한다.
*/
class Student {

    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    // static 키워드와 함께 클래스 선언부 내부에 위치시킨다.
    static compare(studentA, studentB) {
        return studentA.height - studentB.height;
    }
}

// 학생 배열 생성.
let students = [
    new Student('홍길동', 170),
    new Student('김철수', 180),
    new Student('이영희', 160),
];

// Array.prototype.sort() 고차함수 참고
// 학생 배열을 정렬하여 출력. (기본 정렬기준은 오름차순이다.)
students.sort(Student.compare);         //sort는 고차함수이므로 ()안에 콜백을 넣어야 한다.
console.log(students);

/* Student.compare는 정적 메서드다.
Student.compare는 학생들의 신장을 비교해주는 수단으로써,
각각의 학생 인스턴스마다 필요한 개인용 메서드가 아니라 클래스 전체적으로 두루두루 사용되는 공용 메서드여야 한다.
*/

Student.myStaticMethod = function() {
    console.log('myStaticMethod는 메서드를 프로퍼티 형태로 직접 동적 할당하는 것과 동일하다');
}

console.log(Student);
Student.myStaticMethod();

// 클래스의 생성자를 정적 메서드 내에서 호출해 반환함으로써 팩토리 메서드(객체를 생성하는 메서드)도 구현할 수 있다.
class User {

    constructor(id, registDate) {
        this.id = id;
        this.registDate = registDate;
    }

    static getUser(id) {
        return new this(id, new Date());//이 곳의 this() 생성자는 User 클래스의 constructor의 것을 가리킨다.
    }
}

let user01 = User.getUser('usr01');
console.log(user01);