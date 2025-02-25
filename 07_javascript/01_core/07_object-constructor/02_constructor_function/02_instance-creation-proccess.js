/* 02. 인스턴스 생성 과정*/

function Student(name, age) {

    /* 1. 생성자 함수가 new 키워드로 호출되면 JS 엔진은 먼저 새로운 빈 객체를 생성하고
    this에 바인딩 해둔다. 이 과정은 함수 실행 이전, 즉 '런타임 이전'에 암묵적으로 이루어진다.
    */
    console.log('첫 번째 this:', this);

    /* 2. this에 바인딩 되어있는 인스턴스를 초기화 한다 = 빈 객체에 새로운 프로퍼티들이 추가된다. */
    this.name = name;
    console.log('두 번째 this:', this);

    this.age = age;
    console.log('세 번째 this:', this);

    this.getInfo = function() {
        return `${this.name}은 ${this.age}세 입니다.`;
    }
    console.log('네 번째 this:', this);

    /* 3. 완성된 인스턴스가 바인딩 된 this가 암묵적으로 반환된다. = return this;
    (생성자 함수 내부에서 return 구문을 생략하는 것이 디폴트다.)
    만약 아래와 같이 명시적으로 this 외 다른 값을 반환하면...
        1. 원시값 반환 -> 원시값 반환이 무시되고 this가 그대로 리턴됨.
        2. 객체 반환 -> this 반환이 무시되고 객체가 리턴된다. 리턴에 {};만 작성하면 {}만 리턴되긴한다.
    */
    return {};
}

console.log('---------- 0. 여기서부터 Runtime... ----------');
console.log('---------- 1. 생성자 함수 호출 ----------');
const hong = new Student('홍길동', 18);

console.log('---------- 2. 객체 출력 ----------')
console.log(hong);
console.log(hong.getInfo())
