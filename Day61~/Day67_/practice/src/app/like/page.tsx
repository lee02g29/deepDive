"use client";

import React, { useState } from "react";

export default function like() {
  const [like, setLike] = useState<number>(0);

  function liked(type: string) {
    if (type === "liked") {
      setLike(like + 1);
    } else if (type === "cancel") {
      if (like >= 1) {
        setLike(like - 1);
      }
    }
  }

  return (
    <div>
      <h3 className="text-2xl px-4 py-2">Counter</h3>
      <p className="text-xl px-4 py-2">{like}</p>
      <button
        onClick={() => liked("liked")}
        className="border px-4 py-2 rounded-lg m-2"
      >
        좋아요
      </button>
      <button
        onClick={() => liked("cancel")}
        className="border px-4 py-2 rounded-lg m-2"
      >
        좋아요 취소
      </button>
    </div>
  );
}
