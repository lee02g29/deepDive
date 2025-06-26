import Comments from "./components/Comments"
import Inorder from "./components/Inorder"
import Postorder from "./components/Postorder"
import Preorder from "./components/Preorder"
import Recursive from "./components/Recursive"
import {tree} from './components/TreeData'

const comments = [
  {
    id: 1,
    text: '안녕!', // 최상위 댓글
    children: [
      { id: 2, text: '안녕~', children: [
        { id: 4, text: '하이', children: [] },
        { id: 5, text: '안냥', children: [] }
      ] }  // 대댓글
    ]
  },
  {
    id: 3,
    text: '리액트 재미있다!',
    children: []
  }
];
// 더미 데이터

function App() {

  // const result = Preorder(tree)
  // const result2 = Inorder(tree)
  // const result3 = Postorder(tree)

  return (
    <>
      {/* <h1>재귀 / 재귀 컴포넌트</h1> */}
      {/* <Recursive /> */}

      {/* <h1>전위 순회 결과</h1>
      <p>순서 : {result.join('->')}</p>

      <h1>중위 순회 결과</h1>
      <p>순서 : {result2.join('->')}</p>

      <h1>후위 순회 결과</h1>
      <p>순서 : {result3.join('->')}</p> */}

      <h1>정적 Static Comments</h1>
      {
        // 최상위 댓글들 map 반복
        comments.map((c) => (
          <Comments key={c.id} tree={c} />
        ))
      }
    </>
  )
}

export default App

/*
  트리(tree)
  - 계층적 구조를 표현하는 자료구조
  - 시작점(루트)에서 출발하여 여러 개의 자식을 가지고
  뻗어나가는 구조
  - 리액트는 트리를 재귀 컴포넌트로 렌더링하는 방식을 사용함

  - 프론트에서 많이 사용되는 트리 - 일반, 이진 + 문자열 검색에 트라이(Trie)
  - 일반 트리 : 자식 노드 수에 제한이 없음
    ex ) 댓글, 사이드 메뉴(프론트 UI 구조)
  - 이진 트리 : 왼쪽, 오른쪽 자식으로 최대 2개까지만 가능함
    ex ) 정렬된 데이터 추가/삭제
  - 트라이 : 문자열 검색에 특화된 트리
    ex ) 자동완성, 검색어 추천(검색 기능)

  재귀 컴포넌트
  - 자기 자신을 다시 호출하는 컴포넌트
*/