import React from "react";

export default function Q6() {
  const point = 2323;
  let res = 0;

  const point2 = 999;
  let res2 = 0;

  const calc = (point) => {
    return point >= 1000 ? Math.floor(point / 100) * 100 : 0;
  };

  res = calc(point);
  res2 = calc(point2);

  return (
    <div>
      <h3>Q6. 열심히 모은 point, 돌려드립니다.</h3>
      <p>소유 포인트 : {point}포인트</p>
      <p>사용 가능한 포인트 : {res}포인트</p>
      <br />
      <p>소유 포인트 : {point2}포인트</p>
      <p>사용 가능한 포인트 : {res2}포인트</p>
    </div>
  );
}
