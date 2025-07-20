import React from "react";
import { useForm, useWatch } from "react-hook-form";

export default function UseWatchTest() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* name 필드 실시간으로 감시
    watch()를 썼을 때보다 성능 부담이 적음
   */
  const name = useWatch({ control, name: "name" });
  const [email, agree] = useWatch({
    control,
    name: ['email', 'agree']
  })

  const age = useWatch({control, name: 'age'})

  return (
    <div>
      <h3>useWatch()로 변경</h3>
      <input {...register("name")} />
      <p>지금 입력한 이름: {name}</p>

      <hr/>

      {/* 다중 필드 검사 + 조건부 버튼 활성화 */}
      <div>
        <input {...register('email')} placeholder="이메일"/>
        <br/>
        <label>
          <input {...register('agree')} type='checkbox' /> 이용약관 동의 
        </label>

        {/* 둘 다 입력해야 활성화 */}
        <button disabled={!email || !agree}>다음으로</button>
      </div>

      {/* 특정 조건에 따라서 컴포넌트 보여주기 */}

      <div>
        <input {...register('age')} placeholder="나이"
        type='number'
        />
        {
          age >= 20 && <p>성인 전용 옵션이 표시됩니다.</p>
        }
      </div>
    </div>
  );
}

/*
  useWatch()를 이용하면 실시간으로 감시하는 것은 동일
  - 대상이 어느 폼, 어느 컨트롤러에 속해있는지 알아야 제대로 감시 가능
  - useForm() 안에 control이 없으면, 어느 폼의 값을 지켜보는지 알 수 없음

*/
