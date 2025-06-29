import { useState } from "react";
import GraphApp from "./grpahs/GraphApp"
import GraphApp2 from "./grpahs/GraphApp2"
import SubwayGraph from "./grpahs/SubwayGraph"
import YoutubeSearch from "./youtube/YoutubeSearch"

function App() {

  return (
    <>
      {/* <GraphApp />
      <GraphApp2 />
      <SubwayGraph /> */}
      <YoutubeSearch />
    </>
  )
}

export default App
/*
  그래프
  - 각 노드가하나 이상의 노드와 연결되어있는 구조
  - 네트워크, 추천 시스템, 경로 탐색, 관계도 등을 표현할 때 사용
  - 연결이 자유롭고 반복될 수 있는 구조

  - 관계도, 지하철 노선도, 길 찾기 맵과 같은 구조

  라이브러리
  - wis-network, d3.js : 시각화
  - graphlib, cytoscope : 그래프 연산 + UI

  - 방향 그래프와 무방향 그래프
  - 가중치 그래프, 비가중치 그래프

  - 정점(node), 간선(edge)
*/