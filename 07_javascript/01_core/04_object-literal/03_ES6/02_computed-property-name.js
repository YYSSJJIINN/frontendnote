/* 02. 계산된 프로퍼티 이름 */

/*
var obj = {
    'key-0' : 1,
    'key-1' : 2,
    'key-2' : 3
}
*/

var prefix = 'key';
var index = 0;

var obj = {};

/*
ES5에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성하려면
객체 리터럴 외부에서 대괄호 표기법을 사용해야 했다.
*/
for(var i = 0; i < 3; i++) {
obj[prefix + '-' + index++] = index;
}

console.log(obj);   //{ 'key-0': 1 }

/*
ES6에서는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있게 되었다.
(현재는 이런 식으로 사용할수 있다~ 정도로만 알고 있으면 된다.)
(향후 React에서 굉장히 자주 사용하게 될 문법이다.)
*/
var obj2 = {
    [`${prefix}-${index ++}`]: index,
    [`${prefix}-${index ++}`]: index,
    [`${prefix}-${index ++}`]: index
};