/* 02. 다양한 사용법 */

// 할당 연산자(=) 우측엔 모든 이터러블 객체가 올 수 있고 좌측에는 모든 값이 올 수 있다.
// 따라서 객체 프로퍼티도 가능하다.
let user = {};
console.log(user);

[user.firstName, user.lastName] = "Gwansoon Yoo".split(' ');
console.log(user);

// Object.entries()와 구조 분해를 조합하면 객체의 프로퍼티 키와 값을 순회해 편하게 변수로 받아낼 수 있다.
for (let [k, v] of Object.entries(user)) {
    console.log(`${k}: ${v}`);
}

// 변수 교환 용도로도 편하게 사용할 수 있다.
let student = '유관순';
let teacher = '홍길동';

console.log('바꾸기 전:', student, teacher);
[student, teacher] = [teacher, student];
console.log('바꾼 후:', student, teacher);

// 나머지 매개변수를 사용해서 나머지 요소들을 배열로 한 번에 받아낼 수 있다.
let [sign1, sign2, ...restSigns] = ['양자리', '황소자리', '쌍둥이자리', '게자리', '사자자리', '처녀자리', '천칭자리', '전갈자리', '사수자리', '염소자리', '물병자리', '물고기자리'];

console.log(sign1);
console.log(sign2);
console.log(restSigns);     // 나머지 별자리는 배열로서 받아준다.
console.log(typeof restSigns);

// 디폴트 값을 미리 지정해줄 수 있다. (빈 문자열 또는 undefined가 생성되는 것을 방지)
let [firstName3 = '아무개', lastName3 = '김'] = ['길동'];

console.log(firstName3);
console.log(lastName3);