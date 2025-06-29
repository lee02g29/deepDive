import React from 'react'

export default function Postorder(tree, result = []) {

  console.log("tree : ", tree)
  if(!tree) return;

  Postorder(tree.left, result) // 왼쪽 먼저 방문
  Postorder(tree.right, result) // 오른쪽 방문
  result.push(tree.value); // 부모 방문

  return result;
}
