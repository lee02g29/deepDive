import React, { useState } from "react";

export default function ReviewForm({onAdd}) {
  /* 
    리뷰를 컴포넌트로 쓰는 이유 
    - 한 페이지에서 많이 사용되는 부분이기 때문
  */

  // 리뷰 데이터
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!review.trim()) return;

    /* 
      리뷰 내용이 공백이 아니라면, onAdd(리뷰 내용). 부모에게 리뷰 내용을 보냄
      부모는 리뷰 내용을 받아서 리스트에 추가하거나, 서버에 전송 가능
    */

    onAdd(review)
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="리뷰를 입력하세요"
        className="w-full p-2 border rounded resize-none"
        rows={3}
      />
      <button
        type="submit"
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        리뷰 등록
      </button>
    </form>
  );
}
