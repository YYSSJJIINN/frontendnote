/* 02. for-in 반복문 */

var student = {
    name: '유관순',
    age: 16,
    test: undefined,
    getInfo: function() {
        return `${this.name}은(는) ${this.age}세 입니다.`;
    }
};

// 객체의 모든 프로퍼티 키를 순회
for(var pk in student) {
    console.log(pk);
}

for(var pk in student) {
    console.log(`key: ${pk}, value: ${student[pk]}`);
}