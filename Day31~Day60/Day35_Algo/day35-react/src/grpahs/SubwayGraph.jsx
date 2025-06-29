import React, { useState } from "react";

export default function SubwayGraph() {
  const stations = ["신도림", "대림", "구로디지털", "신림", "신대방"];

  const subway = [
    [0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 0, 1],
    [1, 1, 0, 1, 0],
  ];

  // 역을 입력한 값을 기억하는 함수
  const [input, setInput] = useState("");

  // 입력받은 역의 연결된 인접행렬을 저장
  const [connected, setConnected] = useState([]);

  // 버튼 클릭시 역의 정보가 있는지 확인 -> 있다면 출력

  const handleSearch = () => {
    // 예외 상황 : 사용자가 역을 입력했을 때 역이 존재하지 않을 수 있음
    // 입력한 값에 공백이 있을 수 있으므로 trim으로 앞 뒤 공백 제거

    const index = stations.indexOf(input.trim());
    // indexOf() : 배열 안에 값이 있으면 인덱스 번호를 줌, 없으면 -1
    
    if(index === -1) {
      alert('존재하지 않는 역입니다')
      setConnected([]);

      return;
    } 

    const connections = subway[index].map((val, i) => (
      val === 1 ? stations[i] : null
    )).filter(Boolean);
    /* filter(item => Boolean(item)) 
      null, false, 0, '', undefined가 들어오면 값을 제거하고 정상적인 문자들만 남김
      실무적으로 사용하는 코드
    */

    
    setConnected(connections);
  };

  return (
    <div>
      <h3>지하철 노선도</h3>
      <div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="역 이름을 입력하세요"
        ></input>
        <button onClick={handleSearch}>연결된 역 찾기</button>
      </div>

      {/* <ul>
        {stations.map((station, i) => (
          <li key={i}>
            <strong>{station}</strong> - 연결된 역{" "}
            {subway[i]
              .map((isConnected, j) => (isConnected ? stations[j] : null))
              .filter((name) => name !== null)
              .join(", ")}
          </li>
        ))}
      </ul> */}

      {connected.length > 0 && (
        <div>
          <h4>"{input}"에서 연결된 역 : </h4>
          <ul>
            {connected.map((station, index) => (
              <li key={index}>{station}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

/*
  입력된 역 이름 입력
  버튼 클릭시 해당 역에서 연결된 모든 역을 화면에 출력

*/
