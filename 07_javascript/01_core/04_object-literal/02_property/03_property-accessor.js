/* 03. 프로퍼티 접근 */

var dog = {
    name : '호두',
    eat : function(food) {
        console.log(`${this.name}가 ${food}를 먹는다.`);
    }
}

// 1. 마침표 표기법(dot notation)
console.log(dog.name);      //호두
dog.eat('고구마');      //호두가 고구마를 먹는다.

// 2. 대괄호 표기법(bracket notation)
console.log(dog['name']);           //호두. 프로퍼티 키는 반드시 작은 따옴표로 감싼 문자열을 사용해야 한다.
// console.log(dog[name]);          //ReferenceError: food is not defined
// console.log(dog["name"]);        //큰 따옴표는 사용하지 않는다.
// console.log(dog[`name`]);        //백틱은 사용하지 않는다.
dog['eat']();               //호두가 undefined를 먹는다.
dog['eat']('고구마');       //호두가 고구마를 먹는다.

// 3. 대괄호 표기법만 사용이 가능한 경우
var obj = {
    'dash-key' : 'dash-value',
    0 : 1
}

// 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않은 이름일 경우 반드시 대괄호 표기법을 사용해 접근해야 한다.
// console.log(obj.dash-key);     //ReferenceError: key is not defined
// console.log(obj.'dash-key');
// console.log(obj[dash-key]);    // 프로퍼티 명은 작은따옴표로 감쌀것.
console.log(obj['dash-key']);   //dash-value

console.log(obj);   //{ '0': 1, 'dash-key': 'dash-value' }

console.log(obj['0']);  //1
// 프로퍼티 키가 숫자로 이루어진 문자열일 경우, 대괄호 표기법 참조 시 따옴표 자체를 생략할 수 있다.
console.log(obj[0]);    //1