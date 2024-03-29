/* window 11 기준

루트 폴더에 public 폴더 만들고 그 안에 html 파일 넣기

terminal: npm install express 
terminal: npm -g install nodemon
*/

const express = require('express');
const app = express();
const port = 4000;

// public 디렉토리를 정적 파일 서버로 설정
app.use(express.static('public'));

// 서버 시작
app.listen(port, '0.0.0.0', () => {
 console.log(`서버가 http://0.0.0.0:${port} 포트에서 실행 중입니다.`);
});


/* 

윈도우 11에서 컴퓨터의 방화벽 설정을 확인하고, 4000번 포트를 방화벽에서 허용하려면 다음 단계를 따르세요.



방화벽 설정 창을 표시합니다.

Windows 11의 경우

[시작] 메뉴 → [모든 앱] → [Windows 도구] 아래의 [제어판] → [시스템 및 보안] → [Windows Defender 방화벽]을 선택합니다.

Windows 10의 경우

[시작] 메뉴 → [Windows 시스템] 아래의 [제어판] → [시스템 및 보안] → [Windows Defender 방화벽]을 선택합니다.

창 왼쪽에 표시된 [고급 설정]을 선택하여 [고급 보안이 포함된 Windows 방화벽] 창을 표시합니다.

창 왼쪽에 표시된 [인바운드 규칙]을 선택한 후 창 오른쪽의 [작업] 패널에서 [새 규칙]을 선택하여 [새 인바운드 규칙 마법사]를 표시합니다.

[규칙 종류]가 표시되면 [포트]를 선택하고 [다음] 버튼을 클릭합니다.

[프로토콜 및 포트]가 표시되면 [TCP]와 [특정 로컬 포트]를 선택하고 [특정 로컬 포트]에 다음 포트 번호를 입력하고 [다음] 버튼을 클릭합니다.
연결 시 허용을 선택합니다.
이름에 원하는 규칙 이름을 입력합니다.
확인을 선택합니다.

이렇게 하면 4000번 포트가 방화벽에서 허용됩니다.

이 명령을 실행하면 다음과 같은 출력이 표시됩니다.

새 규칙이 성공적으로 추가되었습니다.
이제 4000번 포트를 사용하는 응용 프로그램이나 서비스는 방화벽을 통과할 수 있습니다. 




외부 스마트폰에서 서버에 접속하려면 외부 네트워크(예: LTE 또는 와이파이)를 사용해야 합니다. 
스마트폰의 브라우저에서 http://<컴퓨터의_공인_IP_주소>:4000/mobile04.html을 입력하여 접속할 수 있어야 합니다. 
<컴퓨터의_공인_IP_주소>는 컴퓨터의 공인 IP 주소로 대체해야 합니다. 이 IP 주소는 인터넷 공급자(ISP)에 의해 할당됩니다.

            컴퓨터의 공인 ip 주소 확인 하는 방법

            명령 프롬프트 창에서 다음 명령을 입력하고 Enter 키를 누릅니다.
            ipconfig /all
            출력에서 "IPv4 주소" 항목을 찾습니다.

            이 항목이 컴퓨터의 공인 IP 주소입니다.



*/



