/* 01. Global Scope & Local Scope (전역 변수 & 지역 변수)
전역은 코드의 가장 바깥 영역을 말하며 전역은 전역 스코프를 만든다.
전역에 변수를 선언하면 전역 스코프를 갖는 전역 변수가 되며 전역 변수는 어디서든지 참조할 수 있다.
지역이란 함수 몸체 내부를 말하며 지역은 지역 스코프를 만든다.
지역에 변수를 선언하면 지역 스코프를 갖는 지역 변수가 되며 자신의 지역 스코프와 하위 지역 스코프에서 유효하다. 
*/
/* 스코프(scope)
JavaScript에서 스코프(scope)는 변수나 함수가 선언되어 있는 범위를 말하며
이 범위에 따라 변수나 함수에 접근할 수 있는 영역이 결정됨.
*/

var x = 'global x';
var y = 'global y';

function outer() {
    var z = 'outer()의 local z';

    console.log(x);//global x
    console.log(y);//global y
    console.log(z);//outer()의 local z


    function inner() {
        //inner()라는 함수의 로컬변수 x가 있으므로 outer까지 갈 필요가 없다.
        var x = 'inner()의 local x';

        console.log(x);//inner()의 local x
        console.log(y);//global y 전역변수
        console.log(z);//outer()의 local z 로컬변수 내에 z가 없으므로 외부까지 나가야한다.
    }

    inner();
}

outer();
console.log(x);//global x outer라는 함수가 종료되었으므로 내부의 변수들은 다 죽었기 때문에 전역변수까지 찾아간다.
//var z; 이 사이에 z를 선언하면 console.log(z)에서 undefined가 뜬다.
console.log(z);//undefined가 뜰 줄 알았는데, 참조에러가 뜬다. ReferenceError: z is not defined

/*
스코프 체인
전역 스코프 (x, y, outer) <---- outer 지역 스코프 (z, inner) <---- inner 지역 스코프(x)
모든 스코프는 하나의 계층적 구조로 연결되며, 모든 지역 스코프의 최상위 스코프는 전역 스코프이다.
변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여
상위 스코프 방향으로 이동하며 선언된 변수를 검색한다. 
따라서 상위 스코프에서 유효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만
하위 스코프에서 유효한 변수를 상위 스코프에서는 참조할 수 없다.
즉, 안으로는 못 들어가고, 바깥으로만 나갈 수 있다.
*/