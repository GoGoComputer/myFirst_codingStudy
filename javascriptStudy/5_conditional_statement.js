// 조건문 conditional statement

// [돈이 5000 원 이상 있으면 택시 탄다.]
// 조건문


//                       [시작]
//                         |
//             참 |-----돈 > 5000-----| 거짓
//                |                   |
//                |                   |
//          텍시르 탄다 (결과)        O
//                                    |
//(만약에) (가정)                     |
if (money > 5000) {                // | 
    rideTaxi (); // 결과              |
}                                  // |   
//                                    | 
//                                    |
// 5000 > 돈 > 2000                   |
//                                    |
//                        참 |-----돈 > 2000-----| 거짓
//                           |                   |
//                           |                   |
//                      [버스를 탄다]        [걸어간다]

// 1. 6000 이라면
// 2. 만약 money 가
// 3. 3000 이라면

if (money > 5000) { // 참이면
    rideTaxi ();    // 거짓이면

    else if (money > 2000) { // 참이면
        rideBus ();          // 거짓이면
    }
    else { // 참이면
        walk (); // 거짓이면
    }

}


