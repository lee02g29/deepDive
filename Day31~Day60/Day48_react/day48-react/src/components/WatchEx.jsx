import React from "react";
import { useForm } from "react-hook-form";

export default function WatchTest() {
  const { register, watch } = useForm();
  const name = watch("name");

  // 두 입력값 비교
  const password = watch("password");
  const confirm = watch("confirm");

  return (
    <div>
      <input {...register("name")} />
      <p>지금 입력한 이름: {name}</p>
      {/* 입력값이 특정 조건이면 버튼 활성화 */}
      <button disabled={!name}>제출</button>
      <label>비밀번호 입력</label>
      <input type="password" {...register("password")} />
      <label>비밀번호 확인</label>
      <input type="confirm" {...register("confirm")} />
      {
        // 비밀번호 불일치 경고
        password &&
          confirm && // 두 칸 모두 입력했는지 확인
          password !== confirm && ( // 두 값이 다르면
            <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
          )
      }
    </div>
  );
}
