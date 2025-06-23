import React, { useEffect } from "react";
import "../App.css";

export default function KakaoLogin() {
  const KakaoLoginKey = import.meta.env.VITE_KAKAO_API_KEY;

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      // 로그인에 관한 객체 생성
      window.Kakao.init(KakaoLoginKey);
      console.log("정상적으로 객체를 만들었습니다.");
    }
  }, [KakaoLoginKey]);

  const handleLogin = () => {
    if (window.Kakao) {
      /* 
        객체가 생성되었다면 자동으로 로그인 실행
        Kakao.Auth 인증 관련 기능(로그인, 로그아웃)
        login() -> 로그인 할 수 있도록 팝업을 띄우는 함수
        -> 로그인을 성공하면 토큰으로 자동으로 발급해줌
      */
      window.Kakao.Auth.login({
        // 로그인 후에 어떤 정보를 받을지 지정하는 목록
        // 카카오 동의 항목에서 켜줘야함
        scope: "profile_nickname, profile_image",

        // 팝업이 실행되고, 동의를 하면 로그인 성공이 되었음
        success: function (authObj) {
          console.log("로그인 성공");
          console.log("응답받은 결과 : ", authObj);

          // 사용자 정보 요청
          window.Kakao.API.request({
            url : '/v2/user/me', // 필수값

            success: function(res) {
              console.log(res)
            },
            fail: function(err) {
              console.log(err)
            }
          })
        },
        fail: function (err) {
          console.log("로그인 실패");
        },
      });
    } else {
      alert("카카오 객체가 정상적으로 만들어지지 않았습니다.");

      return; // 함수 종료
    }
  };

  return (
    <div>
      KakaoLogin
      <button className="kakao-login-btn" onClick={handleLogin}>
        카카오 로그인
      </button>
    </div>
  );
}

/*
  데이터베이스에 고객사별 id를 제공함
  고객사별 id가 중복되는 경우가 있음
  -> 고객사_id 식으로 저장하는 방법을 쓸 수 있음
*/