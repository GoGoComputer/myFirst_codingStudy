// 6-1_javaScrept_dataType.js



// 자바스크립트 데이터 타입, data types, let vs var, hoisting
// 프론트엔드 개발자 입문편 (JavaScript ES5+)

// 1. Use strict
// added in es5
// use this for Valina Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in es6)

// let globalName = 'global name';
{   // block scope
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
    console.log(globalName); // 글로벌 변수로 선언하면 블럭스코프 안에서 사용 가능
}

// console.log(name); // 블럭스코프 안 name에 접근할 수 없다 - error !!
console.log(globalName); // 글로벌변수로 선언하면 블럭스코프 밖에서도 사용 가능



// var (don't ever use this!) - 더이상 쓰지 않는다 !!!
// var hoisting (move declaration from bottom to top) - 어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어 올려주는 것
// has no block scope - 블럭을 철저히 무시한다
{
    age = 4;
    var age;
}
console.log(age); // 4

// 글로벌한 변수들을 어플리케이션 실행에서 종료까지
// 메모리에 항상 탑제되 있기 때문에 최소한으로 쓰는 것이 좋다

// 가능하면 클래스, 함수, 루프문에 필요할 때만 사용 사는것이 좋다

//자바스크립트에서 변수를 선언할 수 있는 키워드는 딱 하나 let, 이전에 var 이 있다.

// var 은 절대 쓰지 않는다. 

// 3. Constant ( <> Mutable?), r(read)

// favor immutable data type always for a few reasons:
// - security
// (보안상의 이유, 한번 작성한 값을 다른 해커들이 작성한 코드를 삽입해
// 값을 변경해 나가는것이 가능, immutable data type은 이것을 방지할 수 있다.)
// - thread safety
// (다양한 스레드가 동시에 값을 변경하는 위험한 상황 방지)
// - reduce human mistakes
// (앞으로 값이 병경될 필요없는 값은 immutable data type 으로 사용해
// 작성자, 또는 다른 개발자의 실수를 방지할 수 있다.)

const daysinWeek = 7;
const maxNumber = 5;

