import React, { useState } from "react";
import { useBoardStore } from "../app/boardStore";

// 게시글 작성 및 수정
/*
  editingPost : 현재 수정중인 게시글 객체(id, title, content) 또는 null
  setEditingPost : 상위 컴포넌트에서 내려오는 상태 변경 함수,
    수정 모드를 종료할 때 null로 설정

*/
export default function BoardForm({ editingPost, setEditingPost }) {
  /* 초기값 설정시, 수정모드에 있는 editingPost가 객체가 있다면 해당 게시글로 초기화 
    title, content로 초기화
    새글 등록이면 빈 문자열로 초기화
  */
  const [title, setTitle] = useState(editingPost?.editingPost.title || "");
  const [content, setContent] = useState(editingPost?.content || "");

  //
  const addPost = useBoardStore((s) => s.addPost);
  const updatePost = useBoardStore((s) => s.updatePost);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    if (editingPost) {
      // 객체 있으면 수정모드
      updatePost(editingPost.id, title, content);
      setEditingPost(null);
    } else {
      // 객체 없으면 새 글 등록
      addPost(title, content);
    }

    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>{editingPost ? "수정" : "등록"}</button>
        {editingPost && (
          <button onClick={() => setEditingPost(null)}>취소</button>
        )}
      </form>
    </div>
  );
}
