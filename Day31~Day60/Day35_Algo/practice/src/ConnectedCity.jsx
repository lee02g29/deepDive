import React, { useState } from "react";

export default function ConnectedCity() {
  const city = ["서울", "부산", "대전", "광주", "대구"];

  const road = [
    [0, 1, 1, 0, 0],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
  ];

  const [input, setInput] = useState("");

  const [connected, setConnected] = useState([]);

  
  const handleSearch = () => {
    const index = city.indexOf(input.trim());

    if(index === -1) {
      alert('존재하지 않는 도시입니다')
      setConnected([]);

      return;
    } 

    const connections = road[index].map((val, i) => (
      val === 1 ? city[i] : null
    )).filter(Boolean);

    setConnected(connections);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="도시  이름을 입력하세요"
      ></input>
      <button onClick={handleSearch}>연결된 도시 찾기</button>

      {connected.length > 0 && (
        <div>
          <h4>{input}에서 연결된 도시 : {connected.join(", ")}</h4>
        </div>
      )}
    </div>
  )
}