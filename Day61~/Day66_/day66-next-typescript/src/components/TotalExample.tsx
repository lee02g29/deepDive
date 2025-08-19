import React from "react";
import BoardItem from "./BoardItem";

export type Board = {
  id: number;
  title: string;
  content: string;
  readCount: number;
};

export default function TotalExample() {
  // 게시글을 가져와서 저장하고 출력함

  const board1: Board = {
    id: 1,
    title: "첫 글",
    content: "첫 글입니다.",
    readCount: 0,
  };

  const board2: Board = {
    id: 2,
    title: "두 번째 글",
    content: "두 번째 글입니다.",
    readCount: 0,
  };

  const board3: Board = {
    id: 3,
    title: "세 번째 글",
    content: "세 번째 글입니다.",
    readCount: 0,
  };

  const boardList: Board[] = [board1, board2, board3];

  return (
    <div>
      <h3>객체와 배열을 합친 타입스크립트 예제</h3>

      {boardList.map((board) => (
        <BoardItem key={board.id} board={board} />
      ))}
    </div>
  );
}
