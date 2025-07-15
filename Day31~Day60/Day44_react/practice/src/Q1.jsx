import React from 'react'

export default function Q1() {

  const draw = 4;
  const bundle = "cacdbdedccbb";
  const bundle_len = 12;
  let res = [];

  const scoreBoard = [1, 2, 3, 4, 5]; 

  const calcScore = (arr, len, draw) => {
    let scoreA = 0;
    let scoreB = 0;


    for(let i = 0; i < 2 * draw; i++) {
      let cur = arr.charCodeAt(i) - 97;

      if(i % 2 === 0) {
        console.log("A:", i, cur, scoreBoard[cur], scoreA)
        scoreA += scoreBoard[cur];
      } else {
        console.log("B:", i, cur, scoreBoard[cur], scoreB)
        scoreB += scoreBoard[cur]
      }
    }

    
    if(scoreA > scoreB) {
      return [1, scoreA]
    } else if(scoreA === scoreB) {
      return [0, scoreA]
    } else {
      return [2, scoreB]
    }
    
  }

  res = calcScore(bundle, bundle_len, draw)

  return (
    <div>
      <h3>Q2. 획득 점수 구하기 도박은 안돼요</h3>
      <p>카드 뭉치 : {bundle}</p>
      <p>{JSON.stringify(res)}</p>
    </div>
  )
}
