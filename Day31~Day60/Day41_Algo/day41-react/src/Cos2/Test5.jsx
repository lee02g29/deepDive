import React, { useState } from 'react'
import {chain} from 'lodash'

export default function Test5() {

  const [scores, setScores] = useState('');
  const [result, setResult] = useState('');

  const [input, setInput] = useState('');
  const [error, setError] = useState('')

  /*
    실제 스타일
    From validation + 컴포넌트 분리 + 상태 정리
  */

  function parseScores(input) {
    return input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n)).value;
  }

  function isValidScore(score) {
    return score >= 650 && score < 800;
  }

  const handleTest = () => {
    try {
      const scores = parseScores(input);

      if(scores.length === 0) {
        // 직접 에러 처리. Error를 통해 변수를 새로 만들어서 에러를 만듦
        throw new Error('유효한 점수를 입력하세요')
      }
    }catch(error) {
      setError(error.message)
    } 
  }

  // ---

  function lodashText() {
    const scoreArray2 = 
    chain(scores).split(',')
    .map(s => parseInt(s.trim()))
    .filter(n => !isNaN(n))
    .filter(score => score >= 650 && score < 800)
    .value();
    
    setResult(scoreArray2.length)
  }

  // ---

  const handleCheck = () => {
    const scoreArray = 
    scores.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));

    console.log(scoreArray)

    const count = scoreArray.filter(score => score >= 650 && score < 800).length;
    setResult(count)
  }


  return (
    <div>
      <h3>바닐라 자바스크립트</h3>
      <input type='text' 
        onChange={e => setScores(e.target.value)}
        placeholder='점수 입력 (ex : 650, 772, 914... )'
      />
      <button onClick={handleCheck}>수강 대상자 확인</button>
      {
        result !== null && (
          <p>수강 대상자 수 : {result}</p>
        )
      }
    </div>
  )
}

/*
lodash 라이브러리
*/