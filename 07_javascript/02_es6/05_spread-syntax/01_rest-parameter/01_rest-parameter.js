/* 01. Rest Parameter (나머지 매개변수) */

function merge(msg1, msg2) {
    return msg1 + msg2;
}

console.log(merge('안녕하세요.'));
console.log(merge('안녕하세요.', '반갑습니다!'));
console.log(merge('안녕하세요.', '반갑습니다!', '제 이름은 홍길동 입니다!'));


function mergeAll(...args) {
    
    let message = '';

    for(let arg of args) {
        message += (arg + '-');
    }

    return message;
}

console.log(mergeAll('안녕하세요.'));
console.log(mergeAll('안녕하세요.', '반갑습니다!'));
console.log(mergeAll('안녕하세요.', '반갑습니다!', '제 이름은 홍길동 입니다!'));

/* 유의할 점은 나머지 매개변수는 항상 마지막에 있어야 한다.
(Java에서 배운 가변인자와 비슷하다.)
function func(arg1, ...args, arg2) {} -> (X)
function func(arg1, arg2, ...args) {} -> (O)
*/