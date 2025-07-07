import React, { useEffect, useState } from "react";

export default function Q7() {
  const scores = [650, 772, 914, 558, 714, 803, 650, 679, 669, 800];
  const score_len = 10;

  const [stud, setStud] = useState(0);

  const findStud = (scores) => {
    let cnt = 0;

    for(let sc of scores) {
      
      if(sc >= 650 && sc < 800) {
        cnt++;
      }
    }

    return cnt;
  }

  useEffect(() => {
      setStud(findStud(scores));
  }, [])


  return (
    <div>
      <h4>Q7. 영어 수강 대상자 수 구하기</h4>
      <p>점수 목록 : {JSON.stringify(scores)}</p>
      <p>수강 대상 인원 : {stud}</p>
    </div>
  );
}
