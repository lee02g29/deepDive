// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const clinet = await clientPromise;
      const db = clinet.db("shopping");

      const proudctList = await db.collection("products").find().toArray();

      return res.status(200).json({ data: proudctList });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: "허용하지 않는 전송 방식입니다" });
  }
}
