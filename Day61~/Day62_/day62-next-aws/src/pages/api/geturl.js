import AWS from 'aws-sdk'

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  signitureVersion: "V4",
});

export default function handler(req, res) {

  // console.log(req)

  const {Key} = req.body;
  // console.log("key:", Key);

  // 5분짜리 url 발급받기

  const url = s3.getSignedUrl('getObject', {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: Key,
    Expires: 60 * 5,
    ResponseContentDisposition: "inline",
  });

  return res.status(200).json(url)
}

/*
  ResponseContentDisposition
  - 브라우저에서 열기 / 다운로드 할것인지 결정
  - inline : 브라우저에서 열기
  - attachment : 무조건 다운로드
*/