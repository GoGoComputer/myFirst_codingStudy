// 6-2_varibleType.js

'use strict';
// 자바스크립트 문법 엄격하게 적용

// 4. variable type
// primitive type, single item: number, string, boolen, null, underfiedn, symbol

// object, box container
// function(자바스크립트에서는 function데이터타입의 하나)
// first-class function(그 언어에서 first-class function이 지원이 된다는 말은,
// 이 프로그래밍 언어에서 펑션도 데이터 타입처럼 변수에 할당 가능하고 또 그렇게 때문에
// 함수의 인자로도 전달이 되고, 함수에서 리턴 타입으로도 펑션을 리턴할 수 있는것이 가능)

// JS data type for number
// 자바스크립트에서는 데이터 타입을 선언하지 안아도 된다.
// 자바스크립트에서는 타입이 다이나믹하게 결정 되기때문에

const count = 17; // integer
const size = 17.1; // decimal number

// error ----- 템플릿리터럴을 올바르게 사용하려면
// 단일 인용부호 (') 대신 백틱 (`)을 사용해야 합니다.
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


console.log(`값:${count}, 유형: ${typeof count}`);
console.log(`값:${size}, 유형: ${typeof size}`);

// number - 15 분 부터 학습 자바스크립트 
// 3. 데이터타입, data types, let vs var, hoisting |
// 프론트엔드 개발자 입문편 (JavaScript ES5+)

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativelnfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log (infinity);   // infinity
console.log (negativelnfinity);   // -infinity
console.log (nAn);                // NaN

// 자바스크립트를 이용 포지션을 바꾸는 경우, 다양한 계산을 하는 경우 
// 나누고자 하는 값이 0인지 아닌지 
// 숫자 값인지, 아닌지 확인하지 않고 연산을 바로 해버리면 infinity 나 NaN 을 받을 수 있기 때문에
// 에러가 발생할 수 있다. 그래서 항상 연산전 그 값이 valid 한 값인지 확인하고 연산하하는 것이 중요하다.
// 실제로 이 부분 때문에 에러가 발생하는 겨우가 간혹 있다.

// bigInt (fairly new, don't use it yet)
const bigint = 1234567890123456789012345678901234567890n; // over (-2**53 ~ 2*53)
// 자바스크립트에서 number 는 (-2**53 ~ 2*53) 범위의 값만 표현이 가능하다.
// 최근에 bigInt 라는 타입이 추가되어 더 큰 숫자를 표현할 수 있게 되었다.
// 마지막에 'n' 을 붙이면 brgInt 타입이 된다.

console.log(`value: ${bigint}, type: ${typeof bigint}`);
Number.MAX_SAFE_INTEGER;
// Number.MAX_SAFE_INTEGER; 최근에 추가됨 - 크롬, 파이어폭스에서만 지원된다.

// Number.MAX_SAFE_INTEGER 는 JavaScript 와 Python 에서 사용되는 상수로,
// 해당 언어에서 안전에게 표현할 수 있는 최대 정수값을 나타냅니다.

// JavaScript 에서 Number.MAX_SAFE_INTEGER 는 9007199254740991 (2^53 - 1) 입니다.

// string
const c = 'c';
console.log(`c: ${c}, type: ${typeof c}`);
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);    

// boolean
// false: 0, null, undefined, NaN, " 는 false 로 간주되어 진다.
// true: any other value 어떤 값들은  true로
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// 4.symbol, createunique indentifiers for objects

// 맵이나 다른 자료구조에서 고유한 식별자가 필요하거나
// 동시다발적인 컨퍼런스(concurrent) 하게 일어날 수 있는 코드에서
// 우선숭위를 주고 싶을 때 고유식별자가 필요할 때 사용한다.

// 간혹 식별자를 스트링을 이용해 사용하는 경우도 있지만
// 이 스트링은 다른 모듈이나 파일에서 동일한 스트링을
// 사용했을 때 동일한 식별자로 간주된다.

// 하지만 반대로 심볼같은 경우에는 이렇게 동일한 이름을 이용해
// 심볼을 만드었지만 이 두가지의 심볼은 다른 경우가 된다.

const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); // 같은 이름으로 심볼 

console.log(symbol1 == symbol2); // false - 동일한 심볼을 만들었지만 다른 심볼이다.

// Computer science:
// In computer science, concurrent refers to the ability of a system
// to handle multiple tasks or events simultanenously 

// This is a crucial concept for multi-threaded programs,
// parallel computing, and distributed systems.

// 컴퓨터 과학에서 "concurrent"는 시스템이 여러 작업이나 이벤트를
// 동시에 처리할 수 있는 능력을 의미합니다.

// 이는 다중 스레스 프로그래밍, 병령 컴퓨팅, 분산 시스템에서 중요한 개념입니다.

const gSymbol1 = Symbol.for('id');
const gGymbol2 = Symbol.for('id'); // 같인 이름으로 심볼

console.log(gSymbol1 == gGymbol2); // true - 같은 식별자

console.log (`vale: ${symbol1.description}, type: ${typeof symbol1}`);
// ${symbol1} 심볼은 바로 출력하면 에러발생, 항상 .desvripition 을 이용해
// 변환해 출력해야한다.

// object, real-life object, data structure

// object 는 우리가 일상생활에서 보는 물건과 물체를 대표할 수 있는 박스형태를 말한다.

const eliie = { name: 'ellie', age: 20 };

// 그냥 변수 name age 는 아무것도 설명이 되자 않지만, ellie 라는 오브젝트를 만들어
// ellie 의 이름은 ellie이고 나이는 20 이라고 설명할 수 있다.

// ellie 는 const 타입으로 지정되 있어서 한번 할당된 이 오브젝트는 
// 다른 오브젝트로 할당 변경할 수 없다.

ellie.age = 21; // ellie 오브젝트의 age 를 21로 변경