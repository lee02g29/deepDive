export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).end();
  }
  
  const { username, password } = req.body;
  // console.log("username", username, "password", password);

  // 데이터 비교 후 클라이언트에게 보냄
  const ADMIN_ID = "admin";
  const ADMIN_PW = "admin11!";

  if (username === ADMIN_ID && password === ADMIN_PW) {

    /* 
      쿠키 설정(0814)
      http 헤더에 작성 방식
      authToken=admin_token : 쿠키 이름과 값
      HttpOnly: 보안 강화, 자바스크립트에서는 접근 불가
      Path=/ : 모든 경로에서 쿠키 전송
      Max-Age: 유효시간(초 단위)
    */
    res.setHeader("Set-Cookie",
      "authToken=admin_token;HttpOnly; Path=/;Max-Age=3600"
    );


    return res.status(200).json({ message: "로그인 성공" });
  }

  return res.status(401).json({ message: "아이디 또는 비밀번호가 다릅니다" });
}
