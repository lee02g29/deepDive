import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function InputHome() {
  const navigate = useNavigate();
  const methods = useForm();

  const onSubmit = (data) => {
    console.log("최종 제출:", data);

    navigate("/resume/finalCheck", { state: data });
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <nav style={{ display: "flex", gap: "16px" }}>
            <Link className="link" to="info">
              기본 정보
            </Link>
            <Link className="link" to="depart">
              희망 부서
            </Link>
            <Link className="link" to="history">
              경력 유무
            </Link>
            <Link className="link" to="introduce">
              자기 소개
            </Link>
          </nav>

          <Outlet />
        </form>
      </FormProvider>
    </div>
  );
}

/*
  onValid is not a function
  자식 컴포넌트에서 제출 시도시
  useFormContext가 아니라 useForm만 쓸 때 발생하는 오류

  formState: { errors } 에서 오류가 남
  <FormProvider {...methods}> 여기에 {...methods 안썼음}
*/