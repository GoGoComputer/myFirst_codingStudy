// terminal: node -v 버전 확인

// # Node.js를 설치합니다.
// terminal: sudo apt install nodejs

// # npm을 설치합니다.
// terminal: sudo apt install npm

// # 가상환경을 만듭니다.

// terminal: npm init
//            entry point: (1_hello.js) server.js

// terminal: npm install express



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

