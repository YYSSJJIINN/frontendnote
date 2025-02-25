/* 03. 메서드 단축 구문 */

// ES5에서 메서드를 정의하려면 프로퍼티 값을 함수를 할당한다.
var dog = {
    name : '호두',
    eat : function(food) {
        console.log(`${this.name}가 ${food}를 먹는다.`);
    }
};

dog.eat('고구마');      //호두가 고구마를 먹는다.

// ES5에서 메서드를 정의할 때, function 키워드를 생략한 축약 표현을 사용할 수 있다.
var dog2 = {
    name : '호두',
    eat(food) {
        console.log(`${this.name}가 ${food}를 먹는다.`);
    }
};

dog2.eat('고구마');     //호두가 고구마를 먹는다.