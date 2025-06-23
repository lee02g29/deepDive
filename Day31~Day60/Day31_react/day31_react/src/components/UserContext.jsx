import React, { createContext } from 'react'

const UserContext = createContext(); // 공유할 공간
export default UserContext;

/*
  전체 영역에서 사용할 수 있는 컴포넌트를 하나 만듬

  기본 분법
  const value = useContext()
  Context 자체는 정보를 담고 있지 않으며, 
  컴포넌트 제공하거나, 읽을 수 있는 정보의 종류를 나타냄

  createContext()
  - 값을 전역처럼 공유하기 위해서 사용
*/