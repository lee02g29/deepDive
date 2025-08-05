import React from 'react'
import { useCreatePostMutation } from './postApi';

export default function PostInput() {

  /*
    RTK Query
    - 2개의 값을 배열로 반환
    - [triggerFuction, resultObject] = use(xxx)Mutation();
      - 첫 번째 매개변수 : 실제 요청을 보내는 함수 
      - 두 번째 매개변수 : 요청 상태(loading, error)
  */
  const [createPost, {isSuccess, isLoading, isError}] = useCreatePostMutation();

  const handleCreate = async ()=> {
    await createPost({
      title: "새 게시글",
      body : "내용입니다",
      userId: 1
    });

    alert('게시글 생성 완료')
  }

  return (
    <div>
      <h3>게시글 생성</h3>
      <button onClick={handleCreate}>게시글 생성 버튼</button>
    </div>
  )
}
