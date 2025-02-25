/* 02. 화살표 함수의 특징
화살표 함수는 기존의 함수보다 표현만 간략한 것 뿐만 아니라 내부 동작 또한 간략화 되어있다.
일반 함수와의 차이점을 살펴보자.
*/

// 1. 화살표 함수는 this를 가지지 않는다. (this 바인딩 없음)
let theater = {
    store: 'TERABOX 종로점',
    titles: ['말할 수 없는 비밀', '브로큰', '히트맨2', '검은 수녀', '컴플리트 언노운'],

    /* 화살표 함수는 자신만의 this 바인딩을 가지지 않는다는 특징이 있다.
    따라서 화살표 함수 내부에서 this에 접근하는 경우 화살표 함수를 감싸고 있는
    가장 가까운 일반 함수의 this 바인딩을 참조하게끔 설계되어 있다.
    이러한 경우 화살표 함수가 주변 환경의 this를 상속받는다고 표현한다.
    이러한 특징은 객체의 메서드 내부에서 동일한 객체의 프로퍼티를 대상으로 순회하는데 사용할 수 있다.
    */
    showMovieList() {
        this.titles.forEach(

            /* 화살표 함수 내부의 this는 showMovieList 메서드가 호출될 때의 this,
            즉 theater 객체를 가리킨다.
            따라서 this.store는 theater.store를 가리킨다.
            */
            t => console.log(this.store + ':' + t)
        );
    }

    // showMovieList() {
    //     this.titles.forEach(function(title) {
    //        // 화살표 함수가 아닌 일반 함수를 사용하면 this.store는 theater를 가리키지 않기 때문에 undefined이다.
    //       console.log(this.store + ': ' + title);
    //     });
    //   }
};

theater.showMovieList();

// 2. 화살표 함수는 new 연산자와 함께 호출할 수 없다. (생성자 함수로 사용 불가)
const arrowFunc = () => {};
const notArrowFunc = function() {};

// 화살표 함수는 this 바인딩을 가질 수 없기 때문에 자연스레 인스턴스를 생성할 수 없다.
// new arrowFunc();    // TypeError: arrowFunc is not a constructor

// 화살표 함수는 인스턴스를 생성할 수 없기 때문에 prototype 프로퍼티를 가질 수 없고
// 당연히 프로토타입 객체도 생성하지 않는다.
console.log(arrowFunc.hasOwnProperty('prototype'));     // false
console.log(notArrowFunc.hasOwnProperty('prototype'));  // true

// 3. 화살표 함수는 super를 가지지 않는다. (super 바인딩 없음)
class Animal {

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    move(lostWeight) {
        if (this.weight > lostWeight)
            this.weight -= lostWeight;
        console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다.`)
    }

}

class Tiger extends Animal {

    move(loseWeight) {
        // 화살표 함수는 super 바인딩을 지원하지 않기 때문에 super에 대한 참조를 가장 가까운 함수 move에서 참조한다.
        setTimeout(() => super.move(loseWeight), 5000);             // super는 Animal 클래스를 가리킨다.
        // setTimeout(function() {super.move(loseWeight);}, 5000);        // SyntaxError: 'super' keyword unexpected here
        console.log('먹이를 찾아 산기슭을 어슬렁..');
    }
}

let tiger = new Tiger('백두산 호랑이', 300);
tiger.move(1);


// 4. 화살표 함수는 arguments 객체를 지원하지 않는다.
(
    // 함수부
    function() {
        const arrowFunc = () => console.log(arguments);
        arrowFunc(30, 40);
    }
    // 전달인자부
    (10, 20)
);

/* 화살표 함수는 다른 함수의 인수로 전달되어 콜백 함수로 사용되는 경우가 매우 잦다.
위와 같은 특징들은 콜백 함수 내부의 this가 외부 함수의 this와 다르기 때문에 발생하는 문제를 해결하기 위해
의도적으로 설계된 것이라 할 수 있다.
*/