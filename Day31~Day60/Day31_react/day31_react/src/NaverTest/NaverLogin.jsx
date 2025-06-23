import React, { useEffect } from "react";

export default function NaverLogin() {
  const clientId = import.meta.env.VITE_NAVER_CLIENT;
  const secretId = import.meta.env.VITE_NAVER_SECRET;

  useEffect(() => {
    /* 네이버 로그인에 대한 정보를 가지고 있는 라이브러리를 다운 받아서
      리액트에서 사용할 수 있도록 객체를 생성
    */

    console.log(window.naver);

    // 로그인 버튼 생성 + 로그인 기능을 초기화하는 코드

    // isPopup -> true : 팝업창, false : 새창에서 로그인 진행

    /*
      버튼 만들 때 type : 버튼 안에 무엇이 들어가는냐에 따라 다른 스타일
      1 : 로고만
      2 : 네이버 로그인 텍스트랑 로고
      3 : 네이버로고 + 로그인 텍스트(좀 더 긴 텍스트)
    */
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: clientId,
      callbackUrl: "http://localhost:5173/callback",
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 60 },
    });

    // 로그인 버튼이 생성되어 보임
    naverLogin.init();

    /*
      로그인 후 사용자 정보를 가져와야함
      정보를 가지고 올 때 토큰을 확인해야함
      전체 url을 가지고옴

      세션(서버에 정보 저장), 쿠키(내 컴퓨터에 정보 저장)
    */
    console.log(window.location.href);

    /*
      includes('문자')
      '문자'가 포함되어있는지
      포함되어있으면 true, 포함되어있지 않으면 false
    */

    /*
      getLoginStatus()
      네이버 로그인이 성공했는지 확인하고, 
      성공했다면 사용자 정보를 가져오는 핵심 함수
      비동기 함수

      자동으로 window.location.href -> 리액트 탭이 읽어서
      자동으로 페이지 이동시킴
    */
    if (window.location.href.includes("access_token")) {
      naverLogin.getLoginStatus((status) => {
        if (status) {
          // 로그인 성공 -> 사용자 정보 확인 가능
          console.log(naverLogin);
          const user = naverLogin.user;
          console.log("닉네임 : ", user.nickname);
          console.log("생일 : ", user.birthday);
        } else {
          // 로그인이 실패 또는 사용자 정보 불러오기 실패
          console.error("로그인 실패");
        }
      });
    }
  }, []);

  return (
    <>
      <div>NaverLogin</div>
      <div id="naverIdLogin"></div>
      {/* id가 부정확하면 오류남. 주의 */}
    </>
  );
}

/*
  로그인을 하기 위해서 개발자들에게 라이브러리를 제공

  1. index.html
  <script
    src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
    type="text/javascript"
    charset="utf-8"
  ></script>
  head 부분에 이거 넣기

  2. access_token이 있는지 먼저 확인
*/
