import React from "react";
import { useForm } from "react-hook-form";
import FormError from "./errors/FormError";

export default function WatchTest() {
  const { register, watch, formState: {errors} } = useForm();
  const name = watch("name");

  // 단점 : name 입력마다 전체 컴포넌트 리렌더링
  console.log("컴포넌트 전체 리렌더링");

  return (
    <div>
      <h3>Watch 전체 렌더링 예제</h3>
      <input {...register("name")} />
      <p>지금 입력한 이름: {name}</p>

      <FormError message={errors.name?.message} />
    </div>
  );
}
