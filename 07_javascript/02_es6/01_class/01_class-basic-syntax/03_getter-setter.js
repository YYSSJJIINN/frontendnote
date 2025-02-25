/* 03. getter 와 setter */

class Product {

    constructor(name, price) {
        // 아래 작성한 setter 메서드가 호출된다.
        this.name = name;
        this.price = price;
    }

    /* 접근자 프로퍼티(getter, setter)는 프로토타입의 프로퍼티가 된다. (즉, 프로토타입 메서드가 된다.)
    name, price로 외부 접근하고 언더스코어가 붙은 _name, _price로 내부 접근한다.
    언더스코어(_)는 프로그래머들 사이에서 외부 접근이 불가능한 프로퍼티나 메서드를 나타낼 때 사용하는 관습이다.
    */
    /* getter */
    // 파라미터가 없고 리턴값이 있다.
    get name() {
        console.log('name getter 호출됨...');
        return this._name;
    }

    get price() {
        console.log('price getter 호출됨...');
        return this._price;
    }

    /* setter */
    // 파라미터가 무조건 있고 리턴값이 없다.
    set name(someName) {
        console.log('name setter 호출됨...');
        this._name = someName;
    }

    set price(somePrice) {
        console.log('price setter 호출됨...');
        if(somePrice <= 0) {
            console.log('[Error] 가격은 음수일 수 없습니다.');
            this._price = 0;
            return;
        }

        this._price = somePrice;
    }
}

console.log('---------- 1 ----------');
let phone = new Product('전화기', 100000);
console.log('---------- 2 ----------');
console.log(phone.name);                                // getter 호출
console.log('---------- 3 ----------');

let computer = new Product('컴퓨터', 2000000);
console.log('---------- 4 ----------');
console.log(computer.name+ ', ' + computer.price);      // getter 호출
console.log('---------- 5 ----------');