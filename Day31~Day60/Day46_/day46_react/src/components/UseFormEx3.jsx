import React from "react";
import { useForm } from "react-hook-form";

export default function UseFormEx3() {
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
        <div>
          <input
            type="text"
            {...register("username", {
              required: "아이디를 입력하세요",
              minLength: { value: 4, message: "최소 4글자" },
              maxLength: { value: 16, message: "최대 12글자" },
              pattern: { value: /^[a-zA-Z0-9]+$/, message: "영문과 숫자만" },
            })}
            placeholder="아이디"
          />
        </div>

        {errors.username && <p>{errors.username.message}</p>}

        {/* 숫자 범위 */}
        <div>
          <input
            type="number"
            {...register("age", {
              required: "나이를 입력하세요",
              valueAsNumber: true,
              min: { value: 18, message: "18세 이상" },
              max: { value: 99, message: "99세 이하" },
            })}
          />
        </div>

        {errors.age && <p>{errors.age.message}</p>}

        {/* 검증 커스텀 */}
        <div>
          <input
            type="password"
            {
              ...register("password", {
                required: "비밀번호를 입력하세요",
                validate: (value) =>
                  [/[A-Z]/, /[a-z]/, /[0-9]/, /[^A-Za-z0-9]/].every((pattern) =>
                    pattern.test(value)
                  ) || "영어 대소문자, 숫자, 특수 문자 포함",
              })
              /* 
                배열 내용 모두 가져오고 패턴을 검사함, 
                every : 배열의 값을 하나씩 가져와서, 패턴 변수에 담은 뒤 비교함.
                value 변수에 있는 값들이 정규식 패턴에 맞는 경우 true, 아니면 false.
                false일 경우 메시지를 출력
              */
            }
          />
        </div>

        {errors.password && <p>{errors.password.message}</p>}

        {/* select */}
        <label>
          좋아하는 색 :
          <select
            {...register("favoriteColor", { required: "색상을 선택하세요." })}
          >
            <option value="">선택하세요</option>
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
          </select>
        </label>
        {errors.favoriteColor && <p>{errors.favoriteColor.message}</p>}

        {/* radio */}
        <div>
          <span>성별 : </span>
          <label>
            <input
              type="radio"
              value="male"
              {...register("gender", { required: "성별을 선택하세요." })}
            ></input>
          </label>
        </div>
        {errors.gender && <p>{errors.gender.message}</p>}

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

/*
const {
  register,         // input을 폼에 등록
  handleSubmit,     // 제출 핸들러
  watch,            // 입력값 실시간 감지
  reset,            // 폼 리셋
  setValue,         // 특정 필드 값 설정
  getValues,        // 현재 모든 값 가져오기
  trigger,          // 수동으로 유효성 검사 실행
  setError,         // 에러 수동 설정
  clearErrors,      // 에러 제거
  formState: {
    errors,         // 에러 객체
    isDirty,        // 값이 변경되었는지 여부
    isValid,        // 전체 유효성 통과 여부
    isSubmitting,   // 제출 중 여부
    touchedFields,  // 포커스 후 터치된 필드
    dirtyFields,    // 변경된 필드
  },
  control,          // Controller를 위한 객체 (Controlled input용)
} = useForm();

검증하는 속성들
required 필수 입력 여부
minLength 최소 길이
maxLength 최대 길이
min 숫자형 필드의 최소값
max 숫자형 필드의 최대값
pattern 정규표현식 패턴 매칭
setValueAs 값을 등록하기 전에 특정 형태로 변환하는 콜백
  {setValueAs : v => v.trim()}
disabled 해당 필드 비활성화
*/

/*
  🧠 useForm() 호출
│
├─🔧 내부 상태 공간 생성
│   ├─ values         → 각 input 값 저장
│   ├─ errors         → 유효성 검사 실패 정보
│   ├─ touchedFields  → 사용자가 건드린 필드 추적
│   └─ isValid, isDirty 등 폼 상태 추적
│
├─📌 register("name", 옵션)
│   └─ input 요소와 연결 (name, onChange, onBlur, ref 자동 세팅)
│
├─🖊 사용자 입력
│   └─ onChange 발생 → values 자동 업데이트
│
├─🚨 유효성 검사
│   ├─ onBlur 시 자동 실행
│   ├─ 또는 onSubmit 시 실행
│   └─ 실패하면 → errors[name]에 메시지 저장
│
├─📨 handleSubmit(onSubmit)
│   ├─ 유효성 검사 통과 → onSubmit(data) 실행
│   └─ 실패 → errors 상태로 유지
│
└─📦 formState.errors
    └─ 컴포넌트에 에러 메시지로 표시


UI 흐름
1. useForm() 호출
          ↓
2. register("email")
          ↓
3. <input {...register("email")} /> ← 연결 완료
          ↓
4. 사용자 입력 (이메일 타이핑)
          ↓
5. 값 자동 추적 (values.email = "입력된 값")
          ↓
6. blur 또는 submit 발생
          ↓
7. 유효성 검사
    - 실패 → errors.email = { message: "이메일은 필수입니다" }
    - 성공 → onSubmit(data) 실행
*/
