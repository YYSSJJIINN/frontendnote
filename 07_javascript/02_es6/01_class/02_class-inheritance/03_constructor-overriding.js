/* 03. 생성자 오버라이딩
클래스가 다른 클래스를 상속받고 constructor가 정의되어 있지 않다면 비어있는 constructor가 자동으로 생성된다.

ex)
class Tiger extends Animal {
    constructor(...args) {
        super(...args);
    }
}

생성자는 기본적으로 부모 constructor를 호출한다.
이 때, 부모 constructor에도 인수를 모두 전달하는데
클래스에 자체 생성자가 없는 경우에는 이런 과정이 모두 자동으로 일어난다.
*/

class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eat(foodWeight) {
        this.weight += foodWeight;
        console.log(`${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
    }

    move(lostWeight) {
        if (this.weight > lostWeight) {
            this.weight -= lostWeight;
        }
        console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다.`);
    }
}

let animal = new Animal("동물", 30);
animal.eat(1);
animal.move(0.5);

class Deer extends Animal {

    constructor(name, weight, legLength) {      // 나만의 고유한 프로퍼티(필드)는 legLength
        // 부모 생성자한테 줄 매개변수는 name과 weight다.
        super(name, weight);

        // 자신의 매개변수는 legLengthek.
        this.legLength = legLength;

        console.log(`나란 사슴 ${this.name}, ${this.legLength}m 기럭지에 ${this.weight}kg이죠.`);
    }

    hide(place) {
        console.log(`${this.name}(은)는 ${place}에 숨었습니다.`);
    }
}

let deer = new Deer('슬픈 눈망울의 사슴', 60, 1);

deer.hide('수풀');