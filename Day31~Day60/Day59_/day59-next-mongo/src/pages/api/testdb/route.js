import clientPromise from "@/lib/mongodb";

/*
  API 라우트 함수의 응답 객체
  res : 클라이언트(브라우저)에게 결과를 돌려주는 역할을 함
  req : 브라우저가 보낸 정보들(GET, POST 등)
*/

export default async function handler(req, res) {
  /*
    실제 코드를 작성할 때, 예외적인 처리를 해주는 것이 좋음

    데이터베이스 연결이나, 데이터베이스를 이용해서 추가하거나 삭제, 수정하는 등 작업을 할 때
    예외(에러)가 많이 발생해서 프로젝트가 비정상적으로 종료되는 경우가 많음
  */

  try {
    const client = await clientPromise;

    /* 
      sample_mflix db가 있는지 확인
      없으면 자동으로 생성해줌
    */
    const db = client.db("sample_mflix");
    // console.log(db)

    /* 실제 document 문서 가져오기 
      users 라는 폴더에서, 모두 찾아서, 배열 형태로 반환
      
      limit(n) : 개수 제한
    */
    const users = await db.collection("users").find().limit(2).toArray();

    console.log("가져온 users", users);

    return res.status(200).json({ message: "연결 성공", data: users });
  
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ message: "연결 실패", error : error.message });
  }
}

/* 
  실제 API 라우트는 서버에서 실행이 되기 때문에,
  console.log()는 데이터를 터미널 창에 띄움

  컴포넌트에서 console.log()를 하면 클라이언트에서 실행되기 때문에,
  크롬 콘솔에 출력이 됨
*/
