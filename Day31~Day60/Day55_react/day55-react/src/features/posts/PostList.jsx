import React from "react";
import { useGetPostQuery } from "./postApi";

export default function PostList() {

  const userId = 1;

  /* 
    isLoading, isLoading - RTK Query가 자동으로 제공하는 상태 값
    useGetPostQuery 훅을 생성하면 자동으로 같이옴 
   - query()를 호출 했을 때 자동으로 생성되어 가져올 수 있음 */
  const { data: posts, isLoading, isError } = useGetPostQuery(userId);

  if(isLoading) return <p> 로딩 중</p>
  if(isError) return <p>에러 발생</p>

  return <div>
    <h3>게시글 목록</h3>
    <ul>
      {
        posts?.slice(0,5).map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))
      }
    </ul>
  </div>;
}
