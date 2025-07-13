import React from 'react'

// 데이터만 불러오는 코드
export async function FetchTodos() {

  // API 통신
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")

  if(!response.ok) {
    throw new Error('데이터를 불러오지 못했습니다.')
  }

  const data = await response.json();

  return data;
}

/*
  createAsyncThunk
  API 호출을 쉽게 처리하도록 도와주는 함수
  - 비동기 API 요청을 리덕스에서 쉽게 처리하는 것

  용도
  - 원래 리덕스는 순수 동기 작업만 처리함
  - 서버에서 API 요청을 보내고 응답받을 때는 비동기 처리가 필요
    - createAsyncThunk는 비동기 함수를 작성할 수 있게 해주고, 자동으로 pending, fulfiled, rejected 상태를 만들어줌

  Thuck
  - 나중에 실행될 함수
  - 어떤 계산이나 작업을 바로 실행하지 말고, 그것을 함수로 감싸서
  나중에 실행할 수 있도록 만들어놓는 것
  - 리덕스에서는 주로 비동기 작업(API 요청, 타이머, 파일 읽기)
*/