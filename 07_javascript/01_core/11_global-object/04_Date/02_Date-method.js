/* 02_Date-method */

// Date.now : 1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다
const now = Date.now();
console.log(now);                   // 1738806425698
console.log(new Date(now));         // 2025-02-06T01:47:05.698Z

// Date.parse : 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간(new Date(dateString)의 인수와 동일한 형식)까지의 
// 밀리초를 숫자로 반환한다
// 한국시간으로 UTC보다 9시간 빠르기 때문에 9시로 넣었을 뿐, UTC로 인식되어 출력되면 결국 0인 것이다.
console.log(Date.parse('Jan 1, 1970 09:00:00'));        // 0
console.log(Date.parse('Jan 1, 1970 09:00:00 UTC'));    // 32400000
console.log(Date.parse('1970/01/01/09:00:00'));         // 0
console.log(Date.parse('1970/01/01/09:00:00 UTC'));     // 32400000

// Date.UTC : 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달 된 지정 시간까지의 밀리초를 숫자로 반환한다
// new Date(year, month[, day, hour, minute, second, millisecond])와 같은 형식의 인수를 사용한다
// 인수는 로컬 타임(KST)이 아닌 UTC로 인식된다
console.log(Date.UTC(1970, 0, 1)); 
console.log('------------------------');

// 연, 월, 일, 시, 분, 초, 밀리초 반환 및 설정
const date = new Date();
console.log(date.getFullYear());            // 2025
console.log(date.getMonth());               // 1 : 0부터 취급하므로, 0이 1월이고, 1이 2월이다.
console.log(date.getDate());                // 6
console.log(date.getDay());                 // 4 :일요일부터 월요일을 0~6으로 반환
console.log(date.getHours());               // 10
console.log(date.getMinutes());             // 47
console.log(date.getSeconds());             // 5
console.log(date.getMilliseconds());        // 706

date.setFullYear(2020);
date.setMonth(0);
date.setDate(1);
date.setHours(9);
date.setMinutes(10);
date.setSeconds(10);
date.setMilliseconds(10);
console.log(date);
console.log('------------------------');

// Date.getTime, Date.setTime 
// : 1970년 1월 1일 00:00:00(UTC)을 기점으로 경과된 밀리초 반환, 설정
const date2 = new Date();
console.log(date2.getTime());
date2.setTime(5 * 24 * 60 * 60 * 1000);
console.log(date2);

// Date.prototype.getTimezoneOffset : UTC와 Date 객체에 지정된 로케일 시간과의 차이를 분 단위로 반환한다
const today = new Date();
console.log(today.getTimezoneOffset());
console.log(today.getTimezoneOffset() / 60);
console.log('------------------------');

// Date.prototype.toXXXString
// 사람이 읽을 수 있는 형식의 문자열로 Date 객체의 날짜 반환한다
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toISOString());
console.log(today.toLocaleString());
console.log(today.toLocaleTimeString());