import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return alert("파일을 선택하세요");

    /* multpart/form-data : 알아서 자동으로 변환함
      데이터를 꺼내 쓰거나, 파일을 전송받을 경우에 formData 객체(공간)을 만들어서 받음
    */
    const formData = new FormData();

    formData.append("file", file);

    const res = await axios.post("/api/hello", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(res.data);
    alert(res.data.message);

    const { key } = res.data;
    // console.log(key)

    // presigned get url 발급
    const data = await axios.post("/api/geturl", {Key: key});
    
    console.log(data.data);

    setImgUrl(data.data);
  };

  return (
    <div>
      <h1>업로드</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/*"
          // multiple
        />
        <button type="submit">업로드</button>
      </form>

      {imgUrl && (
        <div>
          <img src={imgUrl}  alt="업로드 파일" width={200} />
          <p>이 url은 5분 뒤 만료됩니다.</p>
        </div>
      )}
    </div>
  );
}

/*
  aws-sdk 라이브러리는 v2
  오래전부터 사용되고 있기 때문에 어떤 코드여도 호환이 되어서, 쉽게 aws와 데이터 통신을 할 수 있음.
  단점
  - 사용하지 않는 기능들도 다운로드가 되어서, next 성능 저하를 발생시킬 수 잉씀
  - s3, lambda, api gateway, db등도 다운로드가 됨

  aws-sdk v3
  npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
*/

/* 
  fileList 객체
  - 여러 개의 파일을 선택했을 때, 선택된 파일들의 리스트
  - [0] : 첫 번째 단일 파일만 선택

  http에서 쓰는 multpart/form-data 전송 방식
  텍스트와 피일을 한 번에 여러 조각으로 나눠서 보내는 방식

  필요한 이유
  - 일반적으로 application/json은 순수 데이터만 전송이 가능함
  - 이미지, 동영상, pdf 같은 파일(이진 파일)을 그대로 전송할 수 없음
  - 파일은 텍스트와 다른 형태로 http요청에 담아야함.
*/

/*
  multiple
  - 여러 개의 파일을 보내면, 자동으로 배열로 만들어서 보내줌
*/
