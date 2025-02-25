/* 02. prototype의 기능들 */

const user = {
    id: 'user',
    login: function() {
        console.log(`${this.id}님 로그인 되었습니다.`);
    }
};


const student = {
    __proto__: user
};

console.log(student);
console.log(student.__proto__);

/* 프로퍼타입의 프로퍼티는 읽을 수만 있고 프로퍼티 값을 조작할 수는 없다.(읽기전용)
따라서 아래는 student 빈 객체에 id라고 하는 본인의 프로퍼티가 동적으로 추가된 것이다.
*/
student.id = 'user01';
console.log(student);
console.log(user);

/* login 메서드 내의 this는 프로토타입에 영향을 받지 않으며
메서드를 객체에서 호출했든, 프로토타입에서 호출했든 상관 없이 this는 언제나 '.' 앞에 있는 객체를 참조한다.
즉, 메서드는 공유되지만 객체의 상태는 공유되지 않는다.
*/
student.login();

for(let prop in student) {
    console.log(prop);

    // 프로퍼티 key에 대응하는 프로퍼티가 상속 프로퍼티가 아닌 전달인자 객체에 직접 구현된 프로퍼티면 true를 반환.
    let isMyOwnProp = student.hasOwnProperty(prop);

    if(isMyOwnProp) {
        console.log(`프로퍼티 ${prop}은 내 것이다.`);
    } else {
        console.log(`프로퍼티 ${prop}은 내 것이 아니다.`);
    }
}