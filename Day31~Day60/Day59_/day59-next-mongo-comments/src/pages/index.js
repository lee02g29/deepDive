import { useEffect, useState } from "react";

export default function Home() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/api/testdb/route")
      .then((res) => {
        // console.log(res)

        return res.json();
      })
      .then((data) => {
        console.log(data)
        setComments(data.data || []);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ">
      <h3>댓글</h3>

      <ul>
        {comments.map((comment) => (
          <li key={comment._id} className="border-1 m-1 p-4">
            <h3 className="text-xl font-semibold text-center">작성자 : {comment.name ?? "이름 없음"} - {comment.email ?? "이메일 없음"}</h3>
            <p className="text-xl text-center">{comment.text ?? "작성 내용 없음"}</p>
            <p className="text-sm text-gray-500 text-center mt-2">작성일: {comment.date ?? "--.--.--"}</p>
            </li>
        ))}
      </ul>
    </div>
  );
}
