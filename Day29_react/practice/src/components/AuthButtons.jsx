import React, { useState } from "react";

export default function AuthButtons() {
  const [activeTab, setActiveTab] = useState("login");

  const menus = [
    {
      text: "로그인",
      name: "login",
    },
    {
      text: "회원가입",
      name: "signup",
    },
    {
      text: "비밀번호 찾기",
      name: "find-password",
    },
  ];
  return (
    <div className="bg-gray-200 rounded-2xl mt-4">
      {menus.map((menu, index) => (
        <button
          className={`pt-2 pb-2 pl-7 pr-7 m-1
        hover:bg-gray-100 hover:rounded-2xl hover:text-black
        ${
          activeTab === menu.name
            ? "bg-gray-100 text-black rounded-2xl"
            : " text-gray-600"
        }
        `}
          name={menu.name}
          key={index}
          onClick={() => setActiveTab(menu.name)}
        >
          {menu.text}
        </button>
      ))}
    </div>
  );
}
