/**
 * 실습 설명
재훈이는 요즘 커피 공부에 빠져 있습니다.
에스프레소를 기본으로 하는 커피 메뉴의 레시피를 배웠는데요.
아메리카노는 에스프레소에 물을 더한 메뉴이고, 카페라떼는 에스프레소에 우유를 더한 메뉴라고 배웠습니다.
그래서 이 레시피를 배열로 한번 정리해 보려고 아래와 같이 코드를 작성했습니다.
 */

// 아래 코드중 잘못된 부분을 수정해 주세요
let espresso = ['espresso'];

let americano = espresso.slice();
americano.push('water');

let caffeLatte = espresso.slice();
caffeLatte.push('milk');

// 여기에 caffeMocha와 vanillaLatte 레시피를 만들어 주세요
let caffeMocha = caffeLatte.slice();
caffeMocha.push('chocolateSyrup');

let vanillaLatte = caffeLatte.slice();
vanillaLatte.push('vanillaSyrup');

// 테스트 코드
console.log(espresso);
console.log(americano);
console.log(caffeLatte);
console.log(caffeMocha);
console.log(vanillaLatte);
//slice을 이용한 참조형 출력하기 
/**
 * 자바스크립트의 slice() 메서드는 배열이나 문자열의 일부를 추출하여 새로운 배열이나 새로운 문자열을 반환하는 메서드입니다. 
 * 원본 배열이나 문자열은 변경되지 않습니다. 
 * 즉, **불변성(immutable)**을 유지합니다.
 */