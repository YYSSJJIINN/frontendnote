/* 02. Method : JavaScript의 함수는 객체다. 함수는 값으로 취급할 수 있고 프로퍼티 값으로 사용할 수도 있다. */

var dog = {
    name : '호두',
    //매개변수가 없는 함수 하나
    bark : function() {console.log('멍멍')},
    //매개변수가 있는 함수 하나
    //ReferenceError: name is not defined
    // eat : function(food) {console.log(`${name}가 ${food}를 먹는다.`);}
    //리턴문이 없는 함수는 리턴값이 undefined이다.
    eat : function(food) {console.log(`${this.name}가 ${food}를 먹는다.`);}
    /*
    여기서 this는 dog객체 리터럴 자체를 가리킨다.
    this가 메서드 내에서 사용될 때, 그 메서드를 호출한 객체를 참조한다.
    이는 향후 07_object-constructor 챕터에서 더 자세히 배우게 될 것이다.
    */
}

dog.bark();
//호두가 간식을 먹는다.
dog.eat('간식');    // 전달인자로 '간식'이 전잘되어 콘솔에 출력됨.

console.log(dog.eat);   //dog의 eat메서드 자체를 참조하고 있기 때문에 함수 자체에 대한 참조가 출력됨.
    console.log(dog.eat('개껌'));   //전달인자로 '개껌'이 전달되어 콘솔에 출력됨.
/*
마지막에 undefined가 출력되는 이유:
JS에서 함수(여기서는 eat()나 bark()를 의미함)가 명시적으로 어떤 값을 반환하지 않을 때,
그 함수의 반환값은 자동으로 undefined로 처리된다.
또한, 리턴문이 없는 함수는 리턴값이 undefined이기 때문이다.
따라서 console.log(undefined)가 실행되어
*/