import React, { useEffect } from "react";

export default function KakaoMap1() {
  useEffect(() => {
    /*
      카카오를 이용하기 위해, 카카오 객체가 생성되었는지 확인 필요
      카카오 developers에서 카카오 맵 사용 on 해주기
      */

    if (window.Kakao) {
      window.kakao.maps.load(() => {
        console.log("객체 생성 완료 : ", window.kakao);

        // 지도를 생성하는 코드
        var container = document.getElementById("map");

        var options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        var map = new kakao.maps.Map(container, options);
      });
    }
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
}
/*
  카카오 맵 docs
  https://apis.map.kakao.com/web/guide/

  오류)
  kakao.maps.LatLng is not a constructor
  window.kakao.maps.load(() => {
    // 여기에 맵 관련 코드 작성
  })

  사용해보기

 */
