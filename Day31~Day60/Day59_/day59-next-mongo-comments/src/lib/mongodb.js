
import { MongoClient } from 'mongodb';
const dbId = process.env.NEXT_PUBLIC_MONGO_ID;
const dbPw = process.env.NEXT_PUBLIC_MONGO_PW;

const url = `mongodb+srv://${dbId}:${dbPw}@cluster0.tduw4pe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const clinet = new MongoClient(url)

const clientPromise = clinet.connect();

export default clientPromise;