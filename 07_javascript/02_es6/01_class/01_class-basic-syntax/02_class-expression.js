/* 02. Class Expression (클래스 표현식) */

/* 1. 익명 클래스 표현식 (Anonymous Class Expression) */
// Tutor라는 식별자로 만들어진 클래스
let Tutor = class {
    teacher() {
        console.log('이해되셨나요?');
    }
};

new Tutor().teacher();

/* 2. 기명 클래스 표현식 (Named Class Expression) */
// 앞에 있는게 식별자(Tutee)고, 뒤에 있는게 그냥 이름(MyTutee)
let Tutee = class MyTutee {
    learn() {
        console.log('우와~ 이해가 되었어요!');
    }
};

// MyTutee는 클래스 내부에서만 참조 가능한 지역 스코프의 식별자다.
// new MyTutee().learn();              // ReferenceError: MyTutee is not defined
// 함수 몸체 바깥에 있으므로 전역 스코프에 해당하는 것인데, 이 스코프에서는 MyTutee를 찾을 수 없다. MyTutee는 지역에 속한다.
new Tutee().learn();

/* 3. 클래스 동적 생성 (Dynamically Creating) */
function makeTutee(msg) {

    return class {
        feedback() {console.log(msg);}
    };
}

// 클래스를 리턴해주기 때문에 SecondTutee는 클래스가 된다.
let SecondTutee = makeTutee('곧 점심시간이로군요');

console.log(SecondTutee);
console.log(typeof SecondTutee);

const realSecondTutee = new SecondTutee();
realSecondTutee.feedback();