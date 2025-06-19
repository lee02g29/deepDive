import React, { useEffect } from "react";

export default function KakaoLogin() {
  const KakaoLoginKey = import.meta.env.VITE_KAKAO_API_KEY;

  /* 카카오 객체를 한 번 실행해서 앱키를 확인하는 명령문
    window.Kakao 브라우저에서 로드된 카카오 전역객체
    카카오에서 제공하는 객체에 앱키를 저장해서 객체 초기화
    앱 시작시 한 번만 초기화 진행
    여러 번 초기화되는 버그를 방지하기 위해 사용하는 함수

  */
  useEffect(() => {
    /* 앱이 초기화 되었다면 true 
      초기화되지 않았다면 false. 앱을 한 번 초기화
    */

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KakaoLoginKey);
      console.log("정상적으로 객체를 만들었습니다.");
    }
  }, [KakaoLoginKey]);

  const handleLogin = () => {
    Kakao.Auth.authorize({
      redirectUri: "https://localhost:5173/callback",
    });
  };
  return (
    <div>
      KakaoLogin
      <button onClick={handleLogin}>카카오 로그인</button>
    </div>
  );
}

/*
  카카오 로그인을 하기 위해서는 javascript key가 필요

  OAuth 2.0
  - 여러 플랫폼의 계정을 이용해서 내 서비스에 로그인하거나,
  인증 정보를 받아오는 표준 프로토콜
  - 내 서비스와 외부 서비스 사이의 중재자 역할

  ex) 간편 로그인
  - OAuth가 중간에서 계정 플랫폼에 물어보고, 회원이 맞으면 토큰 발급.
  - 발급해주면 회원임을 인식하고 플랫폼을 사용할 수 있음

  카카오 로그인 함수들 다운 받는 스크립트 -> index.html 작성하기
  <script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
*/
