import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function StepName() {

  const {
    register,
    watch, // 실시간 입력값 확인
    formState: {
      errors
    }
  } = useFormContext();

  /* 
    name 필드를 실시간으로 검사를 한다
   */
  const name = watch('name')

  return (
    <div>
      {name && <p>{name}님 환영합니다.</p>}
      <label>이름</label>
      <input {...register('name', {required: '이름은 필수입니다'})}></input>
      {
        errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>
      }
    </div>
  )
}
