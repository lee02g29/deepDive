import React, { useEffect, useState } from "react";
import "../css/MovieChart.css";
import { Link } from "react-router-dom";

export default function MovieChart() {
  const [movies, setMovies] = useState([]);

  const key = import.meta.env.VITE_API_KEY;
  const requestUrl = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20250610`;

  useEffect(() => {
    async function boxOffice() {
      const response = await fetch(requestUrl);
      if (!response.ok) return;

      const json = await response.json();

      // json 타입을 자바스크립트 객체로 변경
      setMovies(json.boxOfficeResult.dailyBoxOfficeList);
      console.log(json.boxOfficeResult.dailyBoxOfficeList);
    }

    boxOffice();
  }, []);

  return (
    <>
      <header className="Rank">
        <h1></h1>
      </header>
      <div className="container">
        {movies.map((movie) => (
          <article className="movie">
            <div
              className={`movie__rank${
                movie.rank === "1" || movie.rank === "2" || movie.rank === "3"
                  ? "--top"
                  : ""
              }`} 
            >
              <span>No.{movie.rank}</span>
            </div>
            <div className="movie__img"></div>
            <span className="movie__name">{movie.movieNm}</span>
            <span className="movie__info">
              {movie.openDt && movie.openDt.trim() !== ""
                ? movie.openDt
                : "--.--.--"}{" "}
              개봉{" "}
            </span>
            <span className="movie__info">
              누적 관객 : {movie.audiAcc || 0}명
            </span>
            <Link to={`/detail/${movie.rnum}`} key={movie.rnum}>
              <button className="movie__reserve">예매하기</button>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
