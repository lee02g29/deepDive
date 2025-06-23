import React from "react";
import KakaoIcon from "../assets/카카오아이콘_원형.svg";
import NaverIcon from "../assets/네이버아이콘_원형.png";

export default function SnsButtons() {
  const sns = [
    {
      name: "kakao",
      src: KakaoIcon,
    },
    {
      name: "naver",
      src: NaverIcon,
    },
  ];

  return (
    <div>
      {sns.map((s, index) => (
        <button
          name={s.name}
          key={index}
          className="w-[50px] h-[50px] m-3 rounded-full p-1.5
        hover:bg-gray-200"
        >
          <img src={s.src}></img>
        </button>
      ))}
    </div>
  );
}
