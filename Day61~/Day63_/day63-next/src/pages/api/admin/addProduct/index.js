import formidable from "formidable";
import fs from "fs";
import AWS from "aws-sdk";

export const config = {
  api: {
    bodyParser: false,
  },
};

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

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    const f = Array.isArray(files.image) ? files.image[0] : files.image;

    const key = `uploads/${Date.now()}-${f.originalFilename || "file"}`;

    const params = {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: key,
      Body: fs.createReadStream(f.filepath),
      ContentType: f.mimetype,
    };

    const result = await s3.upload(params).promise();

    console.log("결과", result);

    return res.status(200).json({ message: "ok", key: key });
  });
}
