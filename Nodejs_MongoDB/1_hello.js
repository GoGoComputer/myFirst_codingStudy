// terminal: node -v 버전 확인

// # Node.js를 설치합니다.
// terminal: sudo apt install nodejs

// # npm을 설치합니다.
// terminal: sudo apt install npm

// # 가상환경을 만듭니다.

// terminal: npm init
//            entry point: (1_hello.js) server.js

// terminal: npm install express



// 서버로 get 요청 처리 하는 법

const express = require('express')
const app = express()

app.listen(8080, function(){
  console.log('listenis on 8080')

});

// termainal: node 1_hello.js

// 브라우져 킨 후 주소창에: localhost:8080

// 컨트롤 c 서버 닫기

// 터미널 위 방향키: 예전 내용 다시 치기

// 누군가가가 /pet 으로 방문 하면..

// pet 관련된 안내문을 띄워주자

app.get('/pet', function(요청, 응답){
   응답.send("펫용품 쇼핑 사이트 입니다.");
});

// 브라우져에 localhost:8080/pet 

// 브라우져에 펫용품 쇼핑 사이트 입니다. 라고 뜸!

// terminal: npm install -g nodemon 자동어로 서버 껏다 켰다 함

// terminal: nodemon 1_hello.js

// 보안오류 인 경우 파워 쉘 에서 관리자 권한으로 실행해서 사용한다. 그리고
// executionpolicy 라고 적고 Restricted 라고 되어 있으면 문제가 있는 것.
// powshell: set-executionpolicy unrestricted 
// 그 후 실행 규칙 변경 하기 (y)