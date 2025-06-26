import React from 'react'

export default function Preorder(node, result = []) {

  console.log("node : ", node)
  // 객체가 없다면 함수 종료
  if(!node) return;

  result.push(node.value); // 부모 먼저 방문
  Preorder(node.left, result) // 왼쪽 방문
  Preorder(node.right, result) // 오른쪽 방문

  return result;
}

/*
  트리를 어떤 순서로 검색할지 결정

  1. 깊이 우선 순회
    - 전위 순회
      - 순서
        루트 -> 왼쪽 -> 오른쪽
      - 트리 구조를 복사하거나 출력할 때 많이 쓰임
    - 중위 순회
      순서
        왼쪽 -> 루트 -> 오른쪽
    - 후위 순회
      순서
        왼쪽 -> 오른쪽 -> 부모
      - 디렉토리 삭제, 서브트리의 합계 계산

  2. 너비 우선 순회
  - 레벨 순회
*/