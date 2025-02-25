/* 01_object(객체)
JS는 객체 기반 프로그래밍 언어로, 원시 값을 제외한 나머지 값(함수, 배열, 정규표현식 등)은 모두 객체로 판단한다.
객체는 0개 이상읜 프로퍼티(property)로 구성된 집합이며, 프로퍼티는 키(Key)-값(value) 쌍으로 구성된다.
JS에서 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있다.
이 때, 프로퍼티 값이 함수일 경우, 이를 메서드(method)라고 부른다.
*/

/* JavaScriopt의 객체 생성 방법
Java, C/C++과 같은 '클래스 기반 객체지향언어'는 클래스를 사전에 정의해놓고
필요한 시점에 new 연산자와 생성자를 호출해 인스턴스를 생성하는 방식으로 객체를 생성한다.
그러나 JS는 '프로토타입 기반 객체지향언어'로,
클래스 기반 객체 지향 언어와는 달리 다음오가 같이 다양한 객체 생성 방법을 가진다.
1. 객체 리터럴
2. Object 생성자 함수
3. 생성자 함수
4. Object.create 메서드
5. Class(클래스)(ES6부터 지원)
이 중, 가장 일반적이고 간단한 방법이 객체 리터럴을 사용하는 방법이다.
중괄호 내 0개 이상의 프로퍼티를 정의한다.
*/

// 프로퍼티가 0개인 빈 객체도 객체다.
var myEmptyObj = {};
console.log(myEmptyObj);            //{}
console.log(typeof myEmptyObj);     //object

// 프로퍼티가 1개인 객체
var myObj = {someVal : 20};
console.log(myObj);                //{someVal: 20}
console.log(typeof myObj);       //object

var student = {
    // 프로퍼티 : 키-값 쌍으로 구성된 객체의 상태를 나타내는 값(=data)
    name : '유관순',
    age : 16,
    // 메서드 : 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)
    getInfo : function() {
        return `${this.name} + '은(는) ${this.age}살 입니다.`;
    }
};

// 프로퍼티 확인
console.log(student);
console.log(typeof student);

// 메서드 확인
console.log(student.getInfo);
console.log(student.getInfo());

/* 객체 리터럴의 중괄호는 코드 블럭을 의미하지 않는다.
따라서 닫는 중괄호 뒤에는 세미 콜론을 붙여줘야 한다.
(그저 해당 중괄호 안에 정의된 키-값 쌍을 포함하는 하나의 객체를 정의한 표현식이다.)
숫자 값이나 문자열을 만드는 것과 유사하게 리터럴로 객체를 생송한다.
개겣 리터럴에 프로퍼티를 포함시켜 객체를 생성함과 동시에 프로퍼티를 만들 수 있고,
객체를 생성한 이후에 프로퍼티를 동적으로 추가할 수도 있다.
객체 리터럴 외의 객체 생성 방식은 모두 함수를 사용해서 생성하므로 함수 챕터를 학습한 이후에 살펴보도록 하자.
*/


















