/* 01. in 연산자 */

// 객체 내 프로퍼티 존재 여부를 확인할 때 사용 가능. 
var student = {
    name: '유관순',
    age: 16,
    test: undefined
};

console.log(student.name === undefined);    // false : 존재하는 프로퍼티
console.log(student.height === undefined);  // true : 존재하지 않는 프로퍼티 //student.height는 존재하지 않음.
console.log(student.age === undefined);     // false : 존재하는 프로퍼티
console.log(student.test === undefined);    // true : test라는 프로퍼티는 존재함에도 불구하고 값이 없는 undefined라서 존재하지 않는 것으로 판별되는 문제 발생.

//()안에 프로퍼티 + in연산자+ 객체obj
//in 연산자는 양쪽에 항이 필요한 이항연산자고, 결과는 boolean값을 반환한다.
//즉, in 연산자를 사용하면 프로퍼티 존재 여부를 정확하게 쉽게 판별할 수 있다.
console.log('name' in student);
console.log('height' in student);
console.log('age' in student);
console.log('test' in student);