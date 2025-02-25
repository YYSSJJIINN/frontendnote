/* 01. constructor function (생성자 함수) */

// 객체 리터럴에 의한 생성
const student1 = {
    name: '유관순',
    age: 16,
    getInfo: function() {
        return `${this.name}은 ${this.age}세 입니다.`;
    }
};

const student2 = {
    name: '홍길동',
    age: 18,
    getInfo: function() {
        return `${this.name}은 ${this.age}세 입니다.`;
    }
};

/* 만약 수억명의 학생 객체를 만들어야 한다면...?
객체 리터럴을 이용한 객체 생성 방식은 직관적이고 간편하지만,
런 타임에 단 하나의 객체만 생성하게 된다.
동일한 프로퍼티를 갖는 객체를 반복해서 여러 개 생성해야 하는 경우,
매번 같은 프로퍼티를 코드로 기술해야 하기 때문에 비효율적이고 번거롭다.
이러한 문제를 해결하기 위해 생성자 함수를 사용한다.
*/

// 2. 생성자 함수에 의한 객체 생성
/*
객체를 생성하기 위한 공통된 템플릿처럼(마치 Java의 class처럼) 생성자 함수를 사용해
프로퍼티 구조가 동일한 인스턴스 여러개를 간편하게 생성할 수 있다.
*/

//아래는 세미콜론이 없으므로 함수 선언문이다.
function Student(name, age) {   //매개변수(파라미터)를 정의해줘야함

    /* 생성자 함수를 사용해 객체를 생성할 때, this는 생성자 함수를 통해 생성되는 인스턴스를 가리킨다.
    즉, 생성자 함수 내에서 this를 사용하면 이는 새로이 생성될 객체 인스턴스를 참조하게 된다.
    */
    this.name = name;
    this.age = age;

    /* 생성자 함수로부터 생성된 객체의 메서드 내에서 this를 사용하면, 그 메서드가 속한 인스턴스를 참조하게 된다.*/
    this.getInfo = function() {
        return `${this.name}은 ${this.age}세 입니다.`;
    }
}

// 인스턴스 생성
const jang = new Student('장보고', 30);
const shin = new Student('신사임당', 40);

// 생성된 인스턴스의 메서드를 호출하여 프로퍼티 값 확인
console.log(jang.getInfo());
console.log(shin.getInfo());
