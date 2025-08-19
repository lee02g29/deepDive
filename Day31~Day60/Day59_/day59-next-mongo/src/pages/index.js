import { useEffect, useState } from "react"

export default function Home() {

  // 관리자 계정. 빠르게 테스트 하고 싶을 때
  const dbId = process.env.NEXT_PUBLIC_MONGO_ID
  const dbPw = process.env.NEXT_PUBLIC_MONGO_PW

  // db url 주소
  const url = `mongodb+srv://${dbId}:${dbPw}@cluster0.tduw4pe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

  // db 사용자. 개인별 권한 설정이 필요할 때
  const userId = process.env.NEXT_PUBLIC_MONGO_USER_ID
  const userPw = process.env.NEXT_PUBLIC_MONGO_USER_PW


  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState()
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/testdb/route")
    .then((res) => {
      console.log(res)
      
      return res.json();
    })
    .then((data) => {
      console.log("결과", data)
      setUsers(data.data || [])
    })
  },[])

  return (
    <div>
      <h1>mongo DB</h1>
      <h3>사용자 정보</h3>

      <ul>
        {
          users.map((user) => (
            <li key={user._id}>{user.name ?? '이름 없음'}</li>
          )) 
        }
      </ul>
    </div>
  );
}

/*
  MongoDB
  - NoSQL 데이터베이스의 한 종류
  - 데이터를 JSON처럼 생긴 문서(Document) 형식으로 저장
  - 컬렉션(Collection , 폴더)안에 문서(Document, 파일)를 저장
  - key-value쌍으로 이루어진 구조

  사용하는 이유
  - 테이블 구조(스키마) 고정이 되어있어서, 빠르게 변경되는 데이터를 저장기엔 불편함
  - 구조가 자유롭고 대용량의 데이터를 빠르게 저장하고 읽을 수 있는 DB가 필요함

  실제 개발자 사용하는 라이브러리
  - 백엔드(Node.js)에서는 mongoose, mongodb 드라이버를 주로 사용
  - Python에서는 pymongo, mongoengine
  - React/FastAPI 프로젝트에서는 MongoDB를 REST API 또는 GraphQL API로 연동해 사용

  MongoDB의 Cluster
  - DB를 저장하고 관리하는 서버들의 집합
  - MongoDB가 설치된 서버 묶음
  
  분산 처리
  - 여러 사용자가 동시에 접근해도 빠르게 응답하려고 함
  - 장애가 생겨도 데이터 유실 없이 복구하려고 함

  * 모든 IP 허용
  - 0.0.0.0/0
  - 실제로는 절대 하면 안되는 것

  과정
  1. 클러스터 생성
  2. 데이터베이스 사용자 생성
  3. network security에서 IP 설정확인
  4. 


  --- 

  App Router 와 Page Router차이

  13 버전 이상 app/폴더 라우팅 -> useEffect 등을 쓰면 use client를 꼭 작성해야함
  12 버전 이하 page/폴더 -> use client를 쓰지 않아도 자동으로 클라이언트가 컴포넌트로 작동 

*/