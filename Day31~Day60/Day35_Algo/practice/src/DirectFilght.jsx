import React, { useState } from "react";

export default function DirectFilght() {
  const airports = [
    "김포",
    "김해",
    "제주",
    "청주",
    "대구",
  ];

  const flightMap = [
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
  ];

  const [input, setInput] = useState("");

  const [connected, setConnected] = useState([]);

  const handleSearch = () => {
    const index = airports.indexOf(input.trim());

    if (index === -1) {
      alert("존재하지 않는 공항입니다");
      setConnected([]);

      return;
    }

    const connections = flightMap[index]
      .map((val, i) => (val === 1 ? airports[i] : null))
      .filter(Boolean);

    setConnected(connections);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="공항 이름을 입력하세요"
      ></input>
      <button onClick={handleSearch}>직항 가능한 공항 찾기</button>

      {connected.length > 0 && (
        <div>
          <h4>
            {input}에서 직항 가능한 공항 : {connected.join(", ")}
          </h4>
        </div>
      )}
    </div>
  );
}
