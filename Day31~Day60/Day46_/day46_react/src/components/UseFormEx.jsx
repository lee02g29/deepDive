import React from 'react'
import { useForm } from 'react-hook-form'

export default function UseFormEx() {

  /*
    register : input을 폼에 등록하는 함수. react-hook-form와 input을 연결
    handleSubmit: 폼 제출 이벤트를 감싸서 검증 -> 제출 함수 실행 흐름으로 바꿔줌

    ** 구조분해를 통해 가져오기 때문에, 별칭으로 이름을 바꿀 순 있지만 권장하지 않음
      다른 개발자와 협업을 위해 변경하지 않고 사용함

    register: 등록,
    handleSubmit: 제출하기,
    formState : {errors: 오류들}

  */
  const {register, handleSubmit, formState: {errors}} = useForm();

  /*
    폼이 성공적으로 제출되면 실행되는 함수
    data는 사용자가 입력한 모든 값이 담긴 객체
    {username: '철수'}
  */
  const onSubmit = (data) => {
    console.log(data)
  }


  /*
    <form onSubmit={handleSubmit(onSubmit)}>
    입력값을 먼저 검증하고, 문제가 없으면 onSubmit 함수를 실행

    <input {
          ...register('username', {required: true})
        } 
    >

    register('username', {required: true})
    - username이라는 이름으로 input을 폼에 등록
    - required: true -> 필수 입력이라는 검증 조건
    - {...re}를 input에 직접 연결하면 value, onChange, ref가 자동으로 처리됨

    실행 순서
    1. input을 register()에 연결
    2. 제출시 handleSubmit()이 실행되고 입력값을 검사
    3. 조건이 맞으면 onSubmit을 실행하고 아니면 errors에 정보를 저장
    
    required: true -> 리액트 훅 폼에서 내부적으로 기본 메시지(This field is required)를 생성
    */
  return (
    <div>
      <h3>useForm</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {
          ...register('username', {required: true})
        } 
        placeholder='이름'/>
        {
          errors.usename && <span>이름은 필수입니다.</span>
        }

        <input type='password'
          {...register('password', {
            required: '비밀번호는 필수입니다'
            })
          }
        />

        <input type='submit'/>
      </form>
    </div>
  )
}

/*
  React Hook Form이랑 React Form 차이
  - 
*/