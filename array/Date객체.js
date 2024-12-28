/**
 * 자바스크립트에서 Date 객체는 날짜와 시간을 다루기 위한 내장 객체입니다.
 * Date 객체는 날짜와 시간을 생성, 수정, 포맷, 비교하는 다양한 메서드를 제공합니다.
 * 자바스크립트에서 Date는 기본적으로 1970년 1월 1일 00:00:00 UTC를 기준으로 한 밀리초 단위의 타임스탬프를 사용합니다. 
 * 이를 UNIX 타임스탬프라고 하며, 이 값은 1970년 1월 1일부터 경과한 밀리초를 나타냅니다.
 */
// Date객체 생성
const now = new Date();
console.log(now);  // 현재 날짜와 시간이 출력됨

//특정 날짜와 시간 또 날짜를 전달하거나, 연도, 월, 일 등의 인수로 날짜를 생성할 수 있습니다.

const specificDate = new Date('2024-12-15');
console.log(specificDate);  // 2024년 12월 15일의 날짜가 출력됨

const anotherDate = new Date(2024, 11, 15);  // 월은 0부터 시작, 11은 12월을 의미
console.log(anotherDate);  // 2024년 12월 15일의 날짜가 출력됨


//1.3 타임스탬프 (밀리초 단위) 밀리초 단위로 날짜를 지정할 수도 있습니다. new Date(<timestamp>) 형식으로 사용합니다.
const timestampDate = new Date(1672531199000);  // 1672531199000 밀리초
console.log(timestampDate);  // 해당 타임스탬프에 해당하는 날짜와 시간이 출력됨


const now2 = new Date();

console.log(now.getFullYear());   // 연도 (예: 2024)
console.log(now.getMonth());      // 월 (0부터 시작, 0은 1월, 11은 12월)
console.log(now.getDate());       // 일 (1부터 31까지)
console.log(now.getHours());      // 시 (0부터 23까지)
console.log(now.getMinutes());    // 분 (0부터 59까지)
console.log(now.getSeconds());    // 초 (0부터 59까지)
console.log(now.getMilliseconds()); // 밀리초 (0부터 999까지)
