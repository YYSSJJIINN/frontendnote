/* 04. 프로퍼티 변경, 추가, 삭제 */

var dog = {
    name : '호두'
}

console.log(dog.name);      // 마침표 표기법
console.log(dog['name']);   // 대괄호 표기법


// 1. 프로퍼티 값 변경
dog.name = '송이';
console.log(dog.name);      // 송이

dog['name'] = '우미';
console.log(dog.name);      // 우미

// 2. 프로퍼티 동적 추가
dog.age = 2;
console.log(dog);       //{ name: '우미', age: 2 }
console.log(dog.age);   //2

// 3. 프로퍼티 동적 삭제
/*
delete 연산자를 사용하면 객체의 프로퍼티를 검색해 삭제해준다.
이 때, 존재하지 않는 프로퍼티를 삭제하려고 하면 에러가 발생하지 않은 채 무시된다.
*/
// delete dog.age;
delete dog['age'];
console.log(dog);       //{ name: '우미' }

delete dog['species'];
console.log(dog);       //{ name: '우미' }
