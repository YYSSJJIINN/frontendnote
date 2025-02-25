/* 02. Recursive Function(재귀 함수)
함수가 자기 자신을 호출하는 것을 재귀 호출이라고 한다.
재귀 호출을 수행하는 함수인 재귀 함수는 반복되는 처리를 위해 사용한다.
*/

function factorial(n) {
    if(n <= 1) return 1;

    return n * factorial(n-1);
}

// 예를 들어 factorial(3)이라면, if(n <= 1)에서 거짓이 되므로
// 아래쪽 리턴인 n * factorial(n-1); 이 실행된다.
// 그러면 3 * factorial(2)가 되고,
// factorial(2)은 다시 if(n <= 1)에서 거짓이 되므로
// 3 * 2 * factorial(2-1)이 되고,
// 이것은 factorial(1)이 if(n <= 1) 조건에서 참이 되므로 return 1이 실행된다.
// 그러면 3 * 2 * 1이 되어 6이 된다.

console.log(factorial(3));      //6
console.log(factorial(4));      //24

/*
재귀 함수는 반복되는 처리를 반복문 없이 구현할 수 있다는 장점이 존재한다.
하지만 무한 반복에 빠질 위험이 있고, 이로 인해 Stack Overflow 에러가 발생할 수 있으므로 주의해야 한다.
반복문보다 재귀 함수를 사용하는 것이 더 직관적으로 이해하기 쉽다고 판단될 때만 사용하자.
*/
