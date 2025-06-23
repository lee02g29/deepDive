import React, { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";

export function commentLoader() {
  const commentsPro = fetch(
    "https://jsonplaceholder.typicode.com/comments"
  ).then((res) => res.json());

  /*
      리액트 7버전이 나올 예정 
      -> defer를 사용하지 않도록 자동으로 defer를 실행 될 수 있도록
    */
  return {
    comments: commentsPro,
  };
}

export default function Comments() {
  const { comments } = useLoaderData();
  // 위에서 실행한 함수가 리턴을 하면 Promise객체로 반환
  console.log(comments);
  return (
    <div>
      <h2>댓글 리스트</h2>
      <Suspense fallback={<p>댓글을 불러오는 중</p>}>
        <Await resolve={comments}>
          {(lodedComments) => (
            <ul>
              {lodedComments.slice(0, 10).map((c) => (
                <li key={c.id}>
                  <strong>{c.body}</strong>
                </li>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
