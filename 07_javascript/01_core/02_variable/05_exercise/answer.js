// 1번 문제 답안
console.log('===== 1번 문제 답안 =====');
console.log(typeof "안녕하세요");    // string
console.log(typeof 123);            // number
console.log(typeof true);           // boolean
console.log(typeof undefined);      // undefined
console.log(typeof null);           // object
console.log(typeof {name:"김철수"}); // object
console.log(typeof [1,2,3]);        // object

// 2번 문제 답안
console.log('===== 2번 문제 답안 =====');
console.log("2" + 2);        // "22" (string)
console.log("2" - 2);        // 0 (number)
console.log("2" * 2);        // 4 (number)
console.log(Number("123"));  // 123 (number)
console.log(String(123));    // "123" (string)
console.log(Boolean(0));     // false (boolean)
console.log(Boolean("false")); // true (boolean)

// 3번 문제 답안
console.log('===== 3번 문제 답안 =====');
if("") console.log('""은 true');
else console.log('""은 false');     // false

if([]) console.log('[]은 true');    // true
else console.log('[]은 false');

if(0) console.log('0은 true');
else console.log('0은 false');      // false

if("0") console.log('"0"은 true');  // true
else console.log('"0"은 false');

if(null) console.log('null은 true');
else console.log('null은 false');   // false

if({}) console.log('{}은 true');    // true
else console.log('{}은 false');

// 4번 문제 답안
console.log('===== 4번 문제 답안 =====');
console.log(Number("3.14"));        // 방법 1
console.log(parseFloat("3.14"));    // 방법 2
console.log(+"3.14");              // 방법 3

// 5번 문제 답안
console.log('===== 5번 문제 답안 =====');
console.log(String(123));          // 방법 1
console.log((123).toString());     // 방법 2
console.log(123 + '');            // 방법 3 