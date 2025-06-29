import React from "react";

export default function GraphApp2() {
  const adList = [
    [0, 1, 0, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 0],
  ];

  const nodeNames = ["A", "B", "C", "D"];

  return (
    <div>
      <h3>방향 그래프</h3>
      <table className="matrix-table">
        <thead>
          <tr>
            <th></th>
            {nodeNames.map((la, i) => (
              <th key={i}>{la}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {adList.map((row, i) => (
            <tr key={i}>
              <th>{nodeNames[i]}</th>
              {row.map((val, j) => (
                <td key={j} className={val ? "connected" : " "}>
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
