import React from "react";
import { useForm } from "react-hook-form";

export default function UseFormEx2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h3>다양한 input처리</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* select */}
        <label>
          좋아하는 색 :
          <select {...register("favoriteColor")}>
            <option value="">선택하세요</option>
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
          </select>
        </label>

        {/* radio */}
        <div>
          <span>성별 : </span>
          <label>
            <input type="radio" value="male" {...register("gender")}></input>
          </label>
        </div>

        {/* checkbox */}

        <div>
          <label>
            <input type="checkbox" {...register("agree")} />
            이용 약관에 동의합니다.
          </label>
        </div>
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

