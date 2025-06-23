// Express 서버 설정 파일

// import cors from 'cors' 

// express 라이브러리를 불러옴
const express = require("express");
const cors = require('cors')
const axios = require('axios')
const app = express(); // 서버를 만듦 (앱 인스턴스 생성)
const port = 5000; // 포트번호

// 모든 요청을 허용하는 명령문
app.use(cors());

// 서버에서 특정 사이트에 접속할 수 있도록 코드를 작성
app.get('/api/naver', async function name(request, response) {
  try {
    console.log("실행")
    // url만 작성하면 네이버는 봇을 차단할 수 있음
    const res = await axios.get('https://www.naver.com', {
      headers : {
        'User-Agent': 'Mozilla/5.0'
      } 
    });
    console.log(res);
    response.json(res);

  } catch(e) {
    console.error("에러 발생 : ", e);
  }
})

/* GET 요청시 응답
req : 클라이언트가 서버로 요청한 내용이 들어있음
rep : 서버가 클라이언트한테 보내는 응답이 들어감
*/
app.get("/api/hello", (req, rep) => {
  rep.json({ message: "안녕하세요. express 서버입니다." });
});

// 서버를 실행할 수 있도록 작성
app.listen(port, () => {
  console.log("서버가 동작합니다. https://localhost:", port);
}); // 서버에 설정된 포트번호가 들어오면 응답
