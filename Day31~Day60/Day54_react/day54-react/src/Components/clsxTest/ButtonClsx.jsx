import React from 'react'
import clsx from 'clsx'
import './Button.scss'

export default function ButtonClsx({ primary, disabled, rounded }) {
  return (
    <div
      className={clsx('btn', {
        'btn-primary' : primary,
        'btn-disabled' : disabled,
        'btn-rounded': rounded
      } )}
    >clsx 적용</div>
  )
}

/*
  clsx()
  - 문자열과 객체를 조합하여 클래스 명을 자동으로 조합해주는 함수
  - 조건에 따라서 클래스를 포함하거나 제거할 수 있음

  첫 번째 매개변수 : 무조건 포함되는 기본 클래스
  두 번째 매개변수 : {'클래스명' : 조건} 형식
  - 객체 형태로 전달된 부분은 조건이 true일 때만 클래스 명이 추가
*/