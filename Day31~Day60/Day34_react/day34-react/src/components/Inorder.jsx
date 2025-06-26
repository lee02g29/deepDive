import React from 'react'

export default function Inorder(tree, result = []) {

  console.log("호출시 트리 : ", tree)
  // 데이터가 있음 -> 배열 출력, 데이터가 없으면 null

  if(tree === null) return;

  Inorder(tree.left, result) // 왼쪽 자식 먼저 방문
  result.push(tree.value); // 부모 노드 방문
  Inorder(tree.right, result) // 오른쪽 방문

  return result;
}

/*
  중위 순회
  - 왼쪽부터 읽어오면서 가운데 부모를 보고 
  마지막 오른쪽 가지를 확인하는 방식
  - 
*/