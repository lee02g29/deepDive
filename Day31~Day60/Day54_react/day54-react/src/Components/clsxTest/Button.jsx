import React from 'react'
import './Button.scss'

// clsx를 사용하지 않아서 지저분한 코드

export default function Button({ primary, disabled, rounded }) {
  
  let className = 'btn';

  if(primary && disabled) {
    className += 'btn-primary btn-disabled'
  } else if(primary) {
    className += 'btn-primary'
  } else if(disabled) {
    className += 'btn-disabled'
  }

  if(rounded) {
    className += 'btn-rounded'
  }
  
  return (
    <button className={className}>버튼</button>
  )
}


/*
  디자인이 추가되거나, 클래스 명이 추가되면 if/else가 많이 생길 수 있음

  코드를 깔끔하게 처리하기 위해서는 clsx
  유지 보수면을 고려했을 때는 Button.module.scss 변경
*/