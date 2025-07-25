import React from "react";
import { useForm } from "react-hook-form";
import { useUserStore } from "../stores/userStore";

// react-hook-form 이용
export default function UserForm() {
  const { register, handleSubmit } = useForm();
  const setName = useUserStore((state) => state.setName);

  const onSubmit = (data) => setName(data.name);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="이름을 입력하세요" />
        <button type="submit">확인</button>
      </form>
    </div>
  );
}
