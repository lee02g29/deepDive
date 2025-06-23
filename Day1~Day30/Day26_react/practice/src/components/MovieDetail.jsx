import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20250610`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("네트워크 응답에 문제가 있습니다.");
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject("💥 실패! " + error.message);
        });
    });

    // 사용 예시
    promise
      .then((array) => {
        setData(
          array.boxOfficeResult.dailyBoxOfficeList.slice(
            Number(id - 1),
            Number(id)
          )
        );
        console.log(
          array.boxOfficeResult.dailyBoxOfficeList.slice(
            Number(id - 1),
            Number(id)
          )
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <article className="movie">
      <div className="movie__img"></div>
      <span className="movie__name">{data[0]?.movieNm}</span>
      <span className="movie__info">
        {data[0]?.openDt && data[0]?.openDt.trim() !== "" ? data[0]?.openDt : "--.--.--"}{" "}
        개봉{" "}
      </span>
      <span className="movie__info">누적 관객 : {data[0]?.audiAcc || 0}명</span>
    </article>
  );
}
