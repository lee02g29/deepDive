import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("mongodb_uri 환경 변수가 설정되지 않았습니다.");
}

const client = new MongoClient(uri);
// console.log(client);

const clientPromise = client.connect();

export default clientPromise;

