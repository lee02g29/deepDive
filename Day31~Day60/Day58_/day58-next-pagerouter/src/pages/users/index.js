import React from 'react'

export default function index() {
  return (
    <div>user안에 index.js</div>
  )
}

/*
  App Router에서 page.js 처럼 대표 페이지 역할을 하는 것이 index.js

  /users/index.js를 파일로 작성하면, 
  url을 /users까지만 작성해도 자동으로 index.js를 찾아서 페이지를 실행함
  (대표 페이지)
*/