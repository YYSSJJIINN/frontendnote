/* 05. Pure Function & Impure Function(순수 함수 & 비순수 함수)
- 순수 함수 : 외부 상태에 의존하지 않고 변경하지도 않는 함수
            (전달인자가 같으면 항상 같은 값을 반환하는 함수이기도 함)
- 비순수 함수 : 외부 상태에 의존하거나 외부 상태를 변경하는 함수
*/

var cnt = 0;

// 순수 함수 : 최소 하나 이상의 인수를 전달받으면서 인수의 불변성을 유지한다.
// increase(n)에 무슨 숫자가 들어가든 필터링만 하고, 외부의 것인 var cnt = 0;를 변경하지도 않는다.
// 망치를 만드는 대장장이가 망치를 안만든다고 망치로 범죄 저지를 사람이 안생기는 것이 아니다.
function increase(n) {
    return ++n;
}

console.log(cnt);   //0

// increase(cnt);
// increase(cnt);
// console.log(cnt);    //0

// console.log(increase(cnt));
// console.log(increase(cnt));
// console.log(cnt);

cnt = increase(cnt);
console.log(cnt);   //1

cnt = increase(cnt);
console.log(cnt);   //2

// 비순수 함수
function decrease() {
    return -- cnt;      // 외부 상태에 의존하며 외부 상태를 변경한다.
}

console.log(cnt);    //0

decrease();
decrease();

console.log(cnt);    //-2

/* 함수의 외부 상태의 변경을 지양하는 순수 함수를 사용하는 것이 좋다.
함수형 프로그래밍은 순수 함수와 보조 함수의 조합을 통해
외부 상태를 변경하는 '부수 효과(side effect : 부작용)'를 최소화해서 불변성을 지향하는 프로그래밍 패러다임이다.
*/