/* 02. 메서드 오버라이딩
부모 메서드 전체를 교체하지 않고, 부모 메서드를 토대로 일부 기능만 변경하고 싶을 때
또는 부모 메서드의 기능을 확장하고 싶을 때 메서드 오버라이딩을 사용하면 된다.
*/

// Animal 클래스 선언
class Animal {

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        console.log(`내 이름은 ${this.name}, ${this.weight}kg이죠.`);
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

 // Animal을 상속 받는 Tiger 클래스 선언
class Tiger extends Animal {

    attack(target) {
        console.log(`${this.name}(은)는 ${target}을 공격합니다.`);
    }

    // Animal의 move를 확장한 Tiger의 move
    move(target) {
       // super.을 통해 부모 클래스에 메서드를 참조한다.
        super.move(0.1);            // 부모클래스인 Animal의 move 메서드를 호출
        this.attack(target);        // Tiger의 attack
    }
}

let tiger = new Tiger('백두산 호랑이', 300);

tiger.move('슬픈 사슴의 눈망울ㅠㅠ');