import clientPromise from "@/lib/mongodb";

export default async function dbHandler(req, res) {
  try {
    const client = await clientPromise;

    const db = client.db("sample_mflix");

    const comments = await db.collection("comments").find().limit(10).toArray();

    return res.status(200).json({
      message: "호출이 성공했습니다.",
      data: comments,
    });
  } catch (e) {
    console.log(e);

    return res.status(500).json({
      message: "호출이 실패했습니다.",
      error: e.message,
    });
  }
}
