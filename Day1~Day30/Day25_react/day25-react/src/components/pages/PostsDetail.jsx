import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function PostsDetail() {
  /*
    동적 파라미터
    - URL 주소에 변수처럼 바뀌는 값을 받아올 수 있게 하는 방식
    - 주소에 정보를 실어서 보내는 방법
    - /post/1 -> 1번 글
    - 동적 파라미터를 작성할 때는 :변수명 (콜론 씀)
  */

  /*
    url 경로에 있는 / 뒤에 있는 값들을 꺼내오고 싶을 때,
    사용하는 Hook
    -> useParams();

    꺼내올 때 자바스크립트의 object
    {'id' : 1}
  */

  const {id} = useParams();
  // console.log(id.id); 
  // 위의 코드와 동일한 내용임

  useEffect(() => {
    fetch('')
    .then()
    .then()
  }, [])
  return (
    <div>
      <h1>상세 내용</h1>
      <h2>이 글의 ID는 {id}번 입니다.</h2>
    </div>
  )
}
