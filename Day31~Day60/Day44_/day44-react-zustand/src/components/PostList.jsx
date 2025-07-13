import React, { useEffect } from "react";
import { usePostStore } from "../app/PostStore";

export default function PostList() {

  const posts = usePostStore((state) => state.posts)
  const removePosts = usePostStore((state) => state.removePosts)

  return (
    <div>
      <h2>📄 게시글 목록</h2>
      {posts.length === 0 ? (
        <p>작성된 게시글이 없습니다.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
              <button onClick={() => removePosts(post.id)}>
                삭제
              </button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
