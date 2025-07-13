import React from "react";
import { useBoardStore } from "../app/boardStore";

// 게시글 목록
export default function BoardList({post, setEditingPost}) {

  const deletePost = useBoardStore((s) => s.deletePost)

  return (
    <div>
      <div style={{ border: "1px solid gray", padding: 10, marginBottom: 10 }}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <button onClick={() => setEditingPost(post)}>수정</button>
        <button onClick={() => deletePost(post.id)}>삭제</button>
      </div>
    </div>
  );
}
