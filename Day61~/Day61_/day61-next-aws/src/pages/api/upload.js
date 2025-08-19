import AWS from 'aws-sdk'

const S3 = new AWS.S3({
  region : process.env.AWS_REGION,
  credentials : {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY
  }
})

console.log("S3 객체 생성", S3);

export default function handler(req, res) {
  if(req.method !== 'POST') return res.status(500).end();

  console.log(req.body);
}

// npm install aws-sdk axios