import React, { useState } from "react";

export default function useObject() {
  //  시용자 정보 저장 및 갱신
  const [user, setUser] = useState({
    name: "",
    job: "",
  });

  return (
    <div>
      {/* onChange
      리액테에서 입력값이 바뀔 때마다 실행되는
      이벤트 핸들러 
      기존에 있던 내용들은 유지하고, ...user이용해서
      먼저 펼쳐서 복사한 뒤, name만 덮어쓰기

      ...user 쓰는 이유
      -> 리액트는 부분 업데이트가 안됨
      -> 객체 전체를 변경해야하기 떄문에, 기존 내용을 복사하고
      필요한거만 유지. 
      그렇지 않으면, 같이 저장한 job 변수가 사라질 수 있음
      */}
      <input
        placeholder="이름"
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
      />
      <p>{user.name}</p>
    </div>
  );
}
