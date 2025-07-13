import React, { useState } from "react";
import { usePostStore } from "../app/PostStore";

// 사용자에게 입력받아 dispatch() 실행
export default function PostForm() {

  // 게시글 저장
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  const addPost = usePostStore((state) => state.addPost)

  // 클릭 이벤트
  const handleSubmit = (e) => {
    // 새로고침 막기
    e.preventDefault();

    // 제목 또는 내용 빈칸 검증
    if(!title || !body) return;

    addPost(title, body);

    setTitle('')
    setBody('')
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>📝 새 글 작성</h2>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="내용"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button type="submit">게시하기</button>
      </form>
    </div>
  );
}
