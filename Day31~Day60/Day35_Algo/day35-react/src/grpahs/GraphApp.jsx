import React from 'react'
import '../App.css'

export default function GraphApp() {

  const adList = [
    [0,1,0,1],
    [1,0,1,1],
    [0,1,0,1],
    [1,1,1,0]
  ];

  const nodeNames = ['A', 'B', 'C', 'D']

  return (
    <div>
      <h1>무방향 그래프</h1>
      <table className='matrix-table'>
        <thead>
          <tr>
            <th></th>
            {
              nodeNames.map((la, i) => (
                <th key={i}>{la}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            adList.map((row, i) => (
              <tr key={i}>
                <th>{nodeNames[i]}</th>
                {
                  row.map((val, j) => (
                    <td key={j}
                      className={val ? 'connected' : ' '}
                    >{val}</td>
                  ))

                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

/*
  2차원 배열을 이용해서 그래프를 그림

  무방향 그래프를 인접 행렬로 구현할 때
  정점들을 배열에 인덱스로 표현하고,
  간선은 배열의 값으로 
  두 정점이 되어 연결되어있다면 1, 연결 되어있지 않다면 0으로 표현


  */