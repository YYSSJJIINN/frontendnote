/* 02. 다양한 사용법 */

// 1. 객체에 존재하지 않는 프로퍼티는 동적으로 추가된다.
// 2. 이 때, 디폴트 값을 설정할 수 있으며 1, 2번을 동시에 사용할 수도 있다.
let shirts = {
    productName: '베이직셔츠'
};

let {productName: productName2 = '기본상품', color: color2 = '기본색상', price: price2 = 0} = shirts;

console.log(productName2);
console.log(color2);
console.log(price2);

// 3. 다수의 프로퍼티가 존재하는 객체에서 원하는 프로퍼티만 뽑아낼 수 있다.
let pants = {
    productName: "배기팬츠",
    color: "검정색",
    price: 30000
};

let {productName: productName3} = pants;
console.log(productName3);

// 4. rest parameter를 사용해 여러개의 프로퍼티를 한 번에 가져올 수도 있다.
// 참고: 구버전 브라우저에서는 동작하지 않음. babel을 이용해서 동작시킬 수 있다.
let {productName: productName4, ...rest} = pants;

console.log(productName4);
console.log(rest);
console.log(rest.color);
console.log(rest.price);

// let 키워드 없이 사용하는 예시
let productName5, color5, price5;
({productName: productName5, color: color5, price: price5} = pants);    // 괄호를 사용해야 문법 에러가 발생하지 않는다.

console.log(productName5);
console.log(color5);
console.log(price5);