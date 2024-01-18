// html file 보내기


/* 우분투에 엣지 설치하기

Repository 업데이트
$ sudo apt update
$ sudo apt install software-properties-common apt-transport-https wget

$ wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main"


Edge 브라우저 설치
sudo apt install microsoft-edge-dev

Edge 브라우저 실행
microsoft-edge

브라우져 킨 후 주소창에: localhost:8000

*/

const express = require('express')
const app = express()

app.listen(8000, function(){
  console.log('listenis on 8080')

});


app.get('/hello', function(요청, 응답){
    응답.sendFile(__dirname + '/2-1_hello.html');
 });


// npm i bootstrap@5.3.2
// html css 편하게 해주는 라이브러리
// https://getbootstrap.com/ 사이트 