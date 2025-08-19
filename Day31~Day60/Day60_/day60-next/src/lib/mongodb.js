import { MongoClient } from "mongodb";
/*
  연동하는 코드라서 로직이기 때문에 .js 파일로 만듦
*/

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("mongodb_uri 환경 변수가 설정되지 않았습니다.");
}

const client = new MongoClient(uri);
console.log(client);

const clientPromise = client.connect();

// 다른 파일에서 연결된 내용을 보고 싶을 때는 clientPromise만 export함
export default clientPromise;

/*
  URL(주소) : 웹 사이트나 파일이 어디있는지 알려주는 위치 정보
  (도로명 주소 같은 것)

  URI(식별자) : 위치를 포함하고 있고, 이름표나 고유번호처럼 어떤 자원인지 가리키는 더 큰 개념
*/
