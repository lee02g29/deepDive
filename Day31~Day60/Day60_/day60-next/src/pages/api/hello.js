// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  // res.status(200).json({ name: "John Doe" });

  // 요청받은 전송의 방식이 post인지 확인
  if (req.method === "POST") {
    const { title, price } = req.body;

    console.log(req.body);
    console.log("상품명 : ", title, "가격: ", price);

    /* 
      insertOne()
      mongodb collection에 하나의 document 추가 할 때, mongodb가 제공하는 함수 

      여러개 추가
      insertMany([여러 개의 값은 객체 형식으로 보내기])
    */
    const clinet = await clientPromise;
    const db = clinet.db("my-shop");

    const result = await db.collection("products").insertOne({
      title: title,
      price: price,
      imageUrl: "/Lessy.png",
    });

    /*
      이미지 또는 동영상 데이터는 mongodb에 넣을 수 있지만, 대체로 사용하지 않음
      백업이 무겁고 저장소 용량에 따라 들어가지 않을 수 있기 때문
      또한, 이진 파일(바이너리 파일)로 변경할 필요가 있기 때문
      readFileSync(이미지 경로)
    */

    // res.status(200).json({ message: "처리 완료", data: req.body });

    // 페이지 이동 하고 싶을 때는 새로운 요청
    return res.redirect(302, "/");
  } else if (req.method === "GET") {
    try {
      const clinet = await clientPromise;
      const db = clinet.db("my-shop");

      /* mongo db는 db가 없으면 my-shop이라는 저장공간을 만듦 
    웹 사이트에서는 보이지 않으며, 첫 번째 데이터를 추가할 때 사이트에 보임
  */

      const proudctList = await db.collection("products").find().toArray();

      return res.status(200).json({ data: proudctList });
      // json 자체는 객체, array, 문자, 숫자 등 아무거나 전송 가능
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: "허용하지 않는 전송 방식입니다" });
  }
}

/*
  
  서버에서 url요청을 받으면 handler함수가 자동으로 자동 실행됨
  네이밍 handler : 암묵적인 관습으로, 특별히 정해진 규칙은 따로 없음
  -> 이름은 편한대로 지어도 됨

  export default 가 붙은 함수 : 해당 파일이 API 요청을 받으면 먼저 실행되어 처리되는 함수

  실무에서는 handler API들을 구별하기 위해 어떤 API인지 함수명을 바꿈
  - 어떤 API인지 구분할 수 있도록 작성한다면, 함수명은 변경해도 문제 없음
  
  .env.local
  - 비밀정보를 따로 보관하는 파일
  - Github에 올리지 않고 자동으로 .gitignore에 표함됨
  - 프론트엔드(브라우저에서 사용)에서는 NEXT_PUBLIC으로 시작함

  사용하는 이유
  - 비밀번호, API 같은 중요한 값을 그대로 적으면 안됨
  - 여러 개발자와 협업할 때도, 서로 다른 환경에서 쓸 수 있도록 분리

  실제 개발자들은 개발용 로컬 환경에서만 사용
  - .env.local
  운영 서버에서만 사용하는 변수들
  - .env.production

  공통 변수
  .env

  NEXT_PUBLIC을 붙이면
  - 브라우저에서 접근가능하게 노출됨
  - 누구나 개발자 도구에서 확인 가능함
  - 비밀번호, 사용자 이름, 클러스터 주소 등이 포함된 DB URL은 반드시 감춰야함

  기본적으로 API 공통주소들은 브라우저에서도 써야할 값이기때문에 NEXT_PUBLIC 붙이기
*/
