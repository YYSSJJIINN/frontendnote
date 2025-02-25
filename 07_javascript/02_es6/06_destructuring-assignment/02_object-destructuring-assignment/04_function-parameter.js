/* 04. 함수 매개변수
함수의 매개변수가 많거나, 또는 매개변수 기본값이 필요한 경우 구조분해 할당을 활용할 수 있다.
*/

// 구조 분해 할당을 이용하면 문제점이 해결 된다.
function displayProduct({ producer = "아무개", width = 10, height = 20, items = [] }) {
    console.log(`${producer} ${width} ${height}`);
    console.log(items);
}

// 함수에 전달할 객체
let exampleProduct = {
    items: ["Coffee", "Donut"],
    producer: "신사임당"
};

// 순서도 무관하고 기본 값 활용 시에도 별도의 처리가 불필요하다.
displayProduct(exampleProduct);