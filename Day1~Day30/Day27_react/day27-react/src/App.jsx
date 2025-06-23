import axios from "axios"
import { useEffect, useState } from "react"
import CrawlingEx from "./components/CrawlingEx"
import NaverCrawling from "./components/NaverCrawling"


function App() {

  // 마운트
  // useEffect(() => {
  //   console.log("처음 실행")
  //   // 단순 조회 get
  //   axios.get('https://jsonplaceholder.typicode.com/posts/1')
  //   .then(res => (console.log(res.data)))
  //   .catch((error) => {console.log("에러", error) })
  //   console.log("완료됨")
  // }, [])

  /*
    async funtion loadData() {
      try {
        // 예외적인 상황(에러) 처리
        // try : 예외가 발생하는지 감시하는 구간
        const res = await axios.get('url')
        console.log() 정상적으로 데이터가 오면 실행하는 공간
      } catch (error) {
        // 예외적인 상황 발생하면(에러) 처리하는 공간
      }
    }
  */

  return (
    <>
      {/* <CrawlingEx /> */}
      <NaverCrawling />
    </>
  )
}
export default App

/*
  Axios는 http요청을 보내기 위한 자바스크립트 라이브러리

  Rest api 통신을 할 때 4가지
  get 데이터를 가져오기(조회)
  post 데이터 보내기(새로 등록) 생성
  put 데이터 수정(덮어쓰기)
  delete 데이터 삭제

  안쓰면 - 개발자들끼리 명확하게 소통이 어려워, 잠재적인 오류를 찾아내기 어려움

  fetch vs axios

  axios - 응답을 자동으로 json으로 바꿔줌
  fetch - 응답을 받았을 때, json()으로 변경이 필요, 에러도 직접 처리해야함


  axios.get() Promise를 반환
  Promise 작업이 완료될 때 실행. 성공했다면 then(). 실패팼다면 catch()

  *react-query를 사용하면 실무에서처럼 axios보다 강력한 상태관리도구로 많이 사용됨
  외부 라이브러리임
  - npm install @tanstack/react-query
  
  */