import React from 'react'


export default function Comments({tree, level = 0}) {
  return (
    <div style={{
      marginLeft: level * 10, // 단계마다 들여쓰기
      borderLeft: '1px solid #ccc', // 계층선 구분
      paddingLeft: 8,
      marginBottom: 10
    }}>
      <p>💬{tree.text}</p> 
      {/* 기본 댓글 */}

      {/* 대댓글이 있다면 재귀 호출로 다시 Comments 컴포넌트 사용 */}

      {
        tree.children.map((child) => 
        ( 
          <Comments key={child.id} tree={child} 
          level={level + 1} />
        ) )
      }
    </div>
  )
}

/*
  정적 댓글 트리를 재귀로 만들어서 표현
  - 미리 데이터를 만들어놓고 출력

  Comments 컴포넌트 
  - 댓글과 대댓글을 렌더링하는 핵심 컴포넌트

  레벨
  - 한 노드가 로트로부터 얼마나 떨어져있는지 나타내는 값
  - 레벨 0부터 시작하며, 레벨 0은 루트인 시작점
*/