/* 04. public field declaration (공개 필드 선언, 클래스 필드 선언) */

class Book {

    // 생성자가 존재할 때
    constructor(name, price) {
        this.name = "모던 자바스크립트";
        this.rice = price;
    }

    /* 클래스를 정의할 때, '프로퍼티이름 = 프로퍼티값'을 입력해주면 클래스 필드를 생성할 수 있다.
    최신브라우저 또는 최신 Node.js에서만 실행 가능하다.*/
    // 문법 오류 : this.은 constructor 내부 또는 메서드 내부에서만 작성해야 한다.
    // this.name = "모던 자바스크립트"
    name = "모던 자바스크립트"
    price = 999;

    introduce() {
        console.log(`${this.name} 책의 가격은 ${this.price} 원 입니다.`);
    }
}


console.log('---------- 1 ----------');
let book = new Book();
console.log('---------- 2 ----------');
book.introduce();
console.log('---------- 3 ----------');
console.log(book.name);
console.log('---------- 4 ----------');
/* 클래스 필드 정의 제안에 따르면 클래스 내에 직접 필드를 선언할 수 있으나,
이 때 필드에 초기값을 제공하지 않는다면 해당 값은 undefined로 초기화된다.
(참고; 클래스 필드에 함수를 할당해도 문법적인 에러는 없지만, 이는 인스턴스 함수가 되어버리기 때문에 권장하지 않는다.)
*/
console.log(book.price);                // undefined : 부모에 조상에 조상까지 찾아봤는데도 없으면 undefined
console.log('---------- 5 ----------');