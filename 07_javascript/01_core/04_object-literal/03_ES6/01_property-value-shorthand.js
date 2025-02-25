/* 01. Property Value Shorthand (프로퍼티 값 단축 구문) */

var id = 'p-0001';  //string
var price = 50000;  //number

var product = {
    id: id,
    price: price
}

console.log(product);   //{ id: 'p-0001', price: 50000 }

/* ES6에서 도입된 새로운 문법이다.
프로퍼티 값으로 변수를 사용하고자 할 때, 변수명과 프로퍼티 키가 동일한 이름이라면 프로퍼티 키를 생략할 수 있다.
프로퍼티 키는 변수 이름으로 자동 생성 된다.
(즉, 단축된 것은 프로퍼티 값이 아니라 프로퍼티 키다. 정확하겐 키가 생략되고, 밸류만 남아있다.)
*/
var product2 = {
    id,
    price
}

console.log(product2);   //{ id: 'p-0001', price: 50000 }
