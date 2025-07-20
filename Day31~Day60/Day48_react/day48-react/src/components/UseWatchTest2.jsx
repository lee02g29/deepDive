import React from "react";
import { useForm, useWatch } from "react-hook-form";

// 부분 컴포넌트
function NameWatcher({ control }) {
  const name = useWatch({ control, name: "name" });

  console.log("[NameWatcher] 컴포넌트 리렌더링");

  return <p>이름 : {name}</p>;
}

export default function UseWatchTest2() {
  const methods = useForm();

  console.log("[Test2] 전체 컴포넌트 렌더링");

  return (
    <div>
      <h3>useWatch 부분 렌더링</h3>
      <input {...methods.register("name")} />
      <NameWatcher control={methods.control} />
    </div>
  );
}
/*
  사용자에게 잘 보이고, 의미 있는 피드백을 주는 에러 UI구성이 중요함
  -> 에러도 컴포넌트를 만들어서 재사용
  
 */
