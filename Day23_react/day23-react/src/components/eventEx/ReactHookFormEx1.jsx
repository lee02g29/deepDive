import React from "react";
import { useForm } from "react-hook-form";
// {필요한 도구만 꺼냄}
// 라이브러리를 추가로 받았을 때, 자동 완성이 안되는 경우가 있음

export default function ReactHookFormEx1() {
  const {
    register, // input 필드 Hook Form에 등록
    handleSubmit, // 폼 제출시 유효성 검사 자동 수행
    formState: { errors }, // 필드별 에러 메시지를 담고 있는 객체
  } = useForm();

  // 폼이 제출되었을 때, 실행할 함수
  const onSubmit = (data) => {
    alert(`제출됨 : ${data}`);
  };

  return (
    <div>
      {/* 폼이 제출되면 hanleSubmit() 함수가 실행 */}
      <form onSubmit={handleSubmit()}>
        {/* username 필드 등록 + 필수 조건 설정 */}
        <input
          {
            ...register("username", 
            { required: "이름은 필수입니다" })
          }
          placeholder="이름 입력"
        ></input>
        {/* 에러 발생시, 에러 메시지를 출력함 */}
        <p style={{color :"red"}}>{errors.username?.message}</p>
        <input type="submit" value="제출"></input>
      </form>
    </div>
  );
}
