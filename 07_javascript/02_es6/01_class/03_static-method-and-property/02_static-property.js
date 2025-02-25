/* 02. 정적 프로퍼티
스펙에 추가된 지 얼마 안된 문법으로, 데이터를 클래스 레벨에 저장하고 싶을 때 사용한다. (객체의 공용 상태)
*/
class Animal {

    static planet = "지구";

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        console.log(`나란 동물 ${this.name}, ${this.weight}kg이죠.`);
    }

    eat(foodWeight) {
        this.weight += foodWeight;
        console.log(`${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
    }

    move(lostWeight) {
        if (this.weight > lostWeight)
            this.weight -= lostWeight;
        console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다.`);
    }

    static compare(animalA, animalB) {
        return animalA.weight - animalB.weight;
    }
}

Animal.myStaticProperty = 'static을 사용한 선언은 기술적으로는 클래스 자체에 직접 할당하는 것과 동일하다.';

/* Animal을 상속받는 Human 클래스
정적 프로퍼티와 정적 메서드는 상속이 가능하다.
class B extends A는 클래스 B의 프로토타입이 클래스 A를 참조하게 하므로
B에서 원하는 프로퍼티나 메서드를 검색할 수 없는 경우 프로토타입인 메서드 A로 검색을 이어 진행한다.
*/
class Human extends Animal {

    develop(lang) {
        console.log(`${this.name}(은)는 ${lang}로 개발을 하고 있습니다.`);
    }
}

let humans = [
    new Human('홍길동', 70),
    new Human('김철수', 90),
    new Human('이영희', 50)
];

// 정적 메서드는 상속이 가능하다.
humans.sort(Human.compare);

console.log(humans);

humans[1].develop('자바스크립트');

// 정적 프로퍼티도 상속이 가능하다.
console.log(Animal.planet);         // 지구
console.log(Human.planet);          // 지구

console.log(Animal.myStaticProperty);
console.log(Human.myStaticProperty);