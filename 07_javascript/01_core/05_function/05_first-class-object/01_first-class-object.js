/* 01. First-Class Object(일급 객체)
    1. 무명의 리터럴로 생성할 수 있다. (즉, 런타임에 생성이 가능하다)
    2. 변수나 자료구조({객체}, [배열] 등)에 값으로써 저장할 수 있다.
    3. 함수의 매개변수로 값으로써 전달할 수 있다.
    4. 함수의 반환값으로써 사용할 수 있다.
*/

// 1번 만족
var hello = function() {
    return '안녕하세요!';
}
// 런타임에 동작하므로 호이스팅 불가능

// 2번 만족
var obj = {hello};      // 메서드 축약형을 사용한 프로퍼티 정의

// 3번 만족
function repeat(func, count) {
    for(var i = 0; i < count; i++) {
        console.log(`${i + 1}번 째 반복: 전달인자로 전달된 func() 호출 -> `, func());
    }
    // 4번 만족
    return function() {console.log(`총 ${count}번 반복 완료!`)}
}

var returnedFunc = repeat(obj.hello, 5);
// console.log(returnedFunc);
returnedFunc();
