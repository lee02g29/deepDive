import React, { useState } from "react";

export default function ConnectedDepart() {
  const depart = ["컴퓨터공학과", "전자공학과", "디자인학과", "경영학과", "수학과"];

  const coop = [
    [0, 1, 1, 0, 1],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 1],
    [0, 1, 1, 0, 1],
    [1, 0, 1, 1, 0],
  ];

  const [input, setInput] = useState("");

  const [connected, setConnected] = useState([]);

  const handleSearch = () => {
    const index = depart.indexOf(input.trim());

    if (index === -1) {
      alert("존재하지 않는 학과입니다");
      setConnected([]);

      return;
    }

    const connections = coop[index]
      .map((val, i) => (val === 1 ? depart[i] : null))
      .filter(Boolean);

    setConnected(connections);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="학과 이름을 입력하세요"
      ></input>
      <button onClick={handleSearch}>협력 중인 학과 찾기</button>

      {connected.length > 0 && (
        <div>
          <h4>
            {input}와 협력중인 학과 : {connected.join(", ")}
          </h4>
        </div>
      )}
    </div>
  );
}
