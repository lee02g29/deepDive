// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import formidable from "formidable";
import fs from 'fs' // 파일을 읽고/쓰기하는 라이브러리. node 환경에 기본 내장됨.
import AWS from 'aws-sdk';

/* api route 설정을 담는 객체 
  bodyParser : api route의 bodyParser 기능을 on/off 스위치
  초기값은 true
*/
export const config = {
  api: {
    bodyParser: false,
  },
};

// S3 객체 생성
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  signatureVersion: "v4",
});

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  console.log("서버에 이미지 들어왔음");

  /*
    multiples: false : 여러 개의 파일 대신 단일 파일만 업로드
    기본 값은 true
    아무것도 없을 시에는, 파일 여러개를 업로드가 가능함
  */
  const form = formidable({ multiples: false });

  // 요청을 읽고 파싱을 함

  /*
    err : 파싱 중 오류
    fields : 일반 form 태그에서 문자열 데이터
    files: 파일 데이터(경로, 크기 등 포함)

    주로 이 세가지 매개 변수를 받음
    쓰지 않는게 있더라도, 순서는 일치시킬 것
    쓰지 않는 것은 _로 해주기 : 문법상 위치는 유지
    ex) 파일만 필요하다면, err, _, files

    중요한 것은 위치
    1. 에러 객체
    2. 문자열 데이터
    3. 파일 데이터
  */
  form.parse(req, async (err, fields, files) => {
    // console.log("폼 데이터", fields);
    // console.log("파일", files);

    /* 
      업로드된 파일 객체
      배열이면 true, 배열이 아니면 false 반환
      
      중요한 것은 업로드된 필드명
      formData.append("필드명") -> isArray(file, 필드명)
      필드명이 같아야함

      단일 파일 
      const f = files.file
    */
    const f = Array.isArray(files.file) ? files.file[0] : files.file;
    // console.log(f)
    // console.log(f.filepath)

    // S3에 객체 키를 저장함
    // uploads : 폴더 이름
    const key = `uploads/${Date.now()}-${f.originalFilename || "file"}`;

    // s3 업로드 설정
    const params = {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: key,
      Body: fs.createReadStream(f.filepath),
      ContentType: f.mimetype
    };

    /* 실제 s3로 전송하기 
      upload() : 콜백 방식으로 동작
      콜백 함수로 동작하면, 직접 다 작성해서 에러 처리를 해야함
      -> promise(): aws가 자동으로 promise객체를 반환함 
    */
    const result = await s3.upload(params).promise()

    console.log("결과", result);


    // 브라우저에 결과를 출력하고 싶을 때
    return res.status(200).json({message: 'ok', key: key})
  });
}

/*
  multpart/form-data 전송으로 온 데이터를 꺼내오려면 필요한 라이브러리
  - npm install formidable

  Next는 기본적으로 bodyParser JSON만 처리 가능
  파일 업로드 (formData)는 bodyParser 기능을 끄고, 
  formidable를 이용해서 데이터를 꺼내야함

*/
