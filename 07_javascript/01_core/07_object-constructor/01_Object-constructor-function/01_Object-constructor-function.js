/* 01. Object constructor function (Object 생성자 함수)
new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성해 반환해준다.
빈 객체 생성 이후 동적으로 프로퍼티 또는 메서드를 추가해 객체를 완성시킬 수 있다.
*/

// 빈 객체 생성
const student = new Object();
console.log(student);       //{}

// 동적 프로퍼티 추가
student.name = '유관순';
console.log(student);       //{ name: '유관순' }

student.age = 20;
console.log(student);       //{ name: '유관순', age: 20 }

console.log(student.name);  //유관순
console.log(student.age);   //20


/*
반드시 Object 생성자 함수를 사용해 객체를 생성할 필요는 없다.
객체 리터럴을 사용하는 것이 더 간편하다.
자바스크립트에는 Object 생성자 함수 이외에도 아래와 같은 빌트인 생성자 함수를 제공한다.
    - String
    - Number
    - Boolean
    - Function
    - Array
    - Date
    - RegExp
    - etc...
*/