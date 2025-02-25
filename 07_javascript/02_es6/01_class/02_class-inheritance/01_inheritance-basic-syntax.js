/* 02. 클래스 상속
클래스 상속을 사용하면 클래스를 다른 클래스로 확장시킬 수 있다.
*/

/* 01. 클래스 상속 기본 문법 */

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

let animal = new Animal("치타", 75);
animal.eat(1);
animal.move(0.5);

console.log(Object.getOwnPropertyNames(Animal));
console.log(Object.getOwnPropertyNames(Animal.prototype));
console.log(Object.getOwnPropertyNames(animal));
console.log(Object.getOwnPropertyNames(animal.__proto__));

// Animal 클래스를 상속 받은(확장하는) Human 클래스를 정의
class Human extends Animal{
    develop(lang) {
        console.log(`${this.name}(은)는 ${lang} 언어를 개발할 수 있습니다.`);
    }
}

let human = new Human('수강생', 72);

// Human 객체는 Animal에 정의된 메서드에 접근 가능 : 인간도 동물이기 때문에.
human.eat(2);
human.move(0.1);
// Human 객체는 자신에게 정의된 메서드에 접근 가능 : 인간만 할 수 있는 개발
human.develop('JavaScript');

/* 결국 class의 키워드 extends는 프로토타입을 기반으로 동작한다.
위 코드에서 extends는 Human.prototype.__proto__를 Animal.prototype으로 설정한다.
그렇기 때문에 Human.prototype에서 메서드를 찾지 못하면 Animal.prototype에서 메서드를 찾는다.*/