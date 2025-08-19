import React from "react";
import { Board } from "./TotalExample";

/*
  props 타입을 다시 한 번 정의해서 사용
  아래처럼 많이 사용함
  props를 넘길 때 {변수} : {변수 : 타입 지정}
*/
type Props = { board: Board }

export default function BoardItem({ board }: Props) {
  return (
    <div className={`board${board.id}-group`}>
      <h4>글 제목: {board.title}</h4>
      <h4>내용: {board.content}</h4>
      <h4>조회수: {board.readCount}</h4>
    </div>
  );
}
