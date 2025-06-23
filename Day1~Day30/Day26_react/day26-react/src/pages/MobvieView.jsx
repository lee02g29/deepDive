import React, { useEffect,useState } from "react";

export default function MobvieView() {
  // 키 값
  const key = import.meta.env.VITE_API_KEY;

  const requestUrl = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20250610`;

  const [movie, setMovie] = useState([]);

  /*
    
  */
  useEffect(() => {
    async function boxOffice() {
      const response = await fetch(requestUrl);

      /* 정상 or 에러 구별 
        아래 if 문은 에러를 확인하는 작업
      */
      if (!response.ok) return;

      const json = await response.json();

      // json 타입을 자바스크립트 객체로 변경
      setMovie(json.boxOfficeResult.dailyBoxOfficeList);
      console.log(json.boxOfficeResult.dailyBoxOfficeList);
    }

    boxOffice();
  }, []);

  return <div>MobvieView</div>;
}
