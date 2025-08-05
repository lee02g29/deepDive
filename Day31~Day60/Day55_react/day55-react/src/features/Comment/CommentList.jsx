import React from 'react'
import { useGetCommentsQuery } from './CommentApi';

export default function CommentList() {
  const postId = 1;

  /* 
    isLoading, isLoading - RTK Query가 자동으로 제공하는 상태 값
    useGetPostQuery 훅을 생성하면 자동으로 같이옴 
   - query()를 호출 했을 때 자동으로 생성되어 가져올 수 있음 */
  const { data: comments, isLoading, isError } = useGetCommentsQuery(postId);

  if(isLoading) return <p> 로딩 중</p>
  if(isError) return <p>에러 발생</p>

  return <div>
    <h3>코멘트 목록</h3>
    <ul>
      {
        comments?.slice(0,5).map((comment) => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
          </li>
        ))
      }
    </ul>
  </div>;
}
