// 6-3_dynaicTyping_dynamicallTyped_language.js

// 이런 다이나믹 타이핑 언어는 내가 좋은 아니디어가 있을 때
// 빠르게 프로토타입을 하고 싶은 경우 매우 유연하게 쓸 수 있는 언어이다.

// BUT

// 다수의 엔지니어들이, 어느정도 규모가 있는 프로젝트를 만들 때
// 이런 다이나믹 타이핑 때문에 문제가 되는 경우가 많다.

// 다음은 이런 문제에 대한 예이다.

let text = 'hello'; // (1) 많은 개발자들이 'text' 라는 변수 이름을 통해
                    // string 타입을 예상하게 된다.
                    //
                    // text는 string 타입

console.log(text.charAt(0)); // text는 string 타입이기 때문에 가능
//(프로그래밍언어어ㅔ서 인덱싱은 배열은 사용할 때는 항상 0 부터 시작한다.) h 출력

console.log(`value: ${text}, type: ${typeof text}`); // text 는 string

text = 1; // (2) 개발 중간에 누군가 text 변수 타입을 숫자 (number) 로 바꿔 버렸다.
console.log(`value: ${text}, type: ${typeof text}`); // text 는 number - 타입변경

text = '7' + 5; 
console.log(`value: ${text}, type: ${typeof text}`); // 

text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // text 는 number - 다시 타입변경

console.log(text.charAt(0)); // (3)... 나중에 개발자가 스트링으로 이해해서
                             // 이렇게 함수를 사용하면 - error !!!

// ===>
console.lot(text.charAt(0)); 

// 자바스크립트는 런티임 중 타입이 정해지기 때문에, 이런 경우로 런타임에러 발생이 많다.
// 그런 이유로 - 타입스크립트가 나옸지만... 퇴출중이다.


