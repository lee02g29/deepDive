import { MongoClient } from "mongodb";

// 관리자 계정. 빠르게 테스트 하고 싶을 때
const dbId = process.env.NEXT_PUBLIC_MONGO_ID;
const dbPw = process.env.NEXT_PUBLIC_MONGO_PW;

// db url 주소
const url = `mongodb+srv://${dbId}:${dbPw}@cluster0.tduw4pe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

/*
    mongodb에 연결하기 위한 객체를 생성(연결 변수 만들기)
  */
const clinet = new MongoClient(url);

// connect() : db 연결을 함. 연결하면 약속된 결과가 옴
const clientPromise = clinet.connect();

// 다른 파일에서 결과를 사용하기 위해서 export 해줌
export default clientPromise;


/*
  공인 ip
  - 인터넷에서 컴퓨터를 구분하기 위한 중복되지 않는 주소
*/

/*
  오류
  MongoServerError: bad auth : Authentication failed.

  - 인증이 제대로 되지 않았음
  - database access 메뉴에서 사용자가 있는지 확인하기
  - 확인 후, url 수정하기
  - 권한 : 읽기&쓰기인지 확인 하기
*/