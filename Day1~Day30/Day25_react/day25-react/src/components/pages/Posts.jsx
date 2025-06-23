import React, { useEffect, useState } from "react";

export default function Posts() {
  /*
    데이터를 jsonplaceholder에서 가져오기

    페이지가 보여질 때, 처음 한 번 게시글 전체를 가져옴 -> useEffect를 이용
    가져온 데이터를 화면에 렌더링 ->? useState
    useState를 렌더링하기 위해 map
  */

  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setPost(json.slice(0, 10))
        /*
          전체 게시글
          전체 내용에서 내가 원하는 내용을 잘라서 저장
          slice(시작 번호, 끝번호)
          시작번호는 데이터 포함 / 끝 번호는 데이터 포함 x
         */
        console.log(json);
      });
  }, []);

  return (
    <div>
      <h1>게시판</h1>
      <ul>
        {
          post.map((board) => (
            <li key={board.id}>{board.title}</li>
          ))
        }
      </ul>
    </div>
  );
}
