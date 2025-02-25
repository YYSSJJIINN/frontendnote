/* 02. 배열과 문자열
배열, 문자열 등은 대표적인 iterable 객체다.
*/

for(let char of "JavaScript 재밌다") {
    console.log(char);
}

let str = "이터러블";

let iteratorInStr = str[Symbol.iterator]();

while(true) {
    let result = iteratorInStr.next();
    if(result.done)
        break;
    console.log(result.value);
}