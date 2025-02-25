/* 01. Strict Mode (엄격 모드) */

// 저역의 선두에 해당 코드를 추가하면 스크립트(.js) 전테에 엄격 모드가 적용된다.
// 'use strict';

function test() {

    // 함수 몸체의 선두에 선언하면 해당 함수 및 하위 중첩 함수 모두의 스코프에 엄격 모드가 적용됨.
    // 로컬 스코프에 엄격모드 작성 시, 해당 지역에만 엄격 모드가 적용된다.
    // 'use strict';

    //ReferenceError: x is not defined
    x = 10;

    // 함수 몸체이긴 하나, 위치가 선두가 아니라면 엄격 모드가 적용되지 않는 코드들을 놓칠 수 있음.
    'use strict';
}

test();

console.log(x);

/* 전역에 strict mode를 적용하면 스크립트 단위로 적용 되어 strict mode와 non-strict mode의 
혼용으로 인한 오류가 발생할 수 있으니 유의한다.
예)
<script>
    'use strict';
</script>
<script>
   x = 10; // 에러 발생하지 않는다.
</script>
*/

/* 서드파티 라이브러리가 non-strict mode인 경우 즉시 실행 함수로 
스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다. */
(function(){
    'use strict';

});

/* 함수 단위로 strict mode를 적용하면 strict mode와 
non-strict mode의 혼용이 되어 바람직 하지 않고 모든 함수에 일일이 적용하는 것도 번거롭다.
 => 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다. */