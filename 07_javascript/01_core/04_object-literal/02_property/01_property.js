/* 01. Property : 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다. */
var student = {
    name : '유관순',
    age : 16
    // 프로퍼티 목록 나열은 쉼표로 구분하며, 마지막 프로퍼티 뒤에 쉼표를 사용해도 에러가 발생하지는 않는다.
}

console.log(student);

var obj = {
    normal : 'normal value',
    '@space@' : 'space value',
    // 빈 문자열 키는 오류를 발생시키지는 않지만 권장하지 않는다.
    '' : '',
    // 숫자 키는 내부적으로 문자열로 변환된다.
    0 : 1,
    // 예약어 키는 오류를 발생시키지는 않지만 권장하지 않는다.
    var : 'var',
    // 이미 존재하는 키를 중복 선언하면 나중에 선언한 프로퍼티 값이 덮어 씌워진다.
    normal : 'new value'
}

console.log(obj);

// 동적으로 프로퍼티를 추가할 수 있다.
var newProp = 'fruit';

obj[newProp] = 'apple';

console.log(obj);

/*
프로퍼티 추가 순서는 정수 프로퍼티(integer property)일 경우 자동으로 정렬되고,
그 외의 프로퍼티는 객체에 추가한 순서 그대로 정렬된다.
*/
