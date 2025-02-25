// 03. nested distructuring (중첩 구조 분해)
let product = {
    size: {
        width: 10,
        height: 30
    },
    items: ["doll", "robot"]
};

// 중첩 구조 분해 실행
let {
    size: {
        width,
        height
    },
    items: [item1, item2],
    producer = '홍길동' // 기본값 할당
} = product;

// 값 확인
console.log(width);     // 10
console.log(height);    // 30
console.log(item1);     // doll
console.log(item2);     // robot
console.log(producer);  // '홍길동' - 동적 프로퍼티 추가