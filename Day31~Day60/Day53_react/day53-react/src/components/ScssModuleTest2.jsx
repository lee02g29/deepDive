import React from 'react'
import styles from '../scss/ScssModuleTest2.module.scss'

export default function ScssModuleTest2() {
  return (
    <div>
      <h3>버튼 상속 예제</h3>
      <button className={styles["btn-primary"]}>primary 버튼</button>
    </div>
  )
}

/*
  styles.btn-primary
  - 실제 리액트에서는 객체명.btn-(하이픈)을 사용할 수 없음
  - 객체이기 때문에, 객체명[클래스명]으로 사용해야함

  보통 모듈에서는 camelCase를 좀 더 자주 사용함

  scss 기준으로 파일 구조 및 분리
  _로 시작하는 scss파일은 css로 바로 컴파일이 되지 않기 때문에
  미리 기능/역할별로 scss를 분리해서 만들어두기도 함
  ex) _reset.scss / _variable.scss 등
  그리고 모두 적용될 수 있도록 index.css에 한 번에 import 함
  @import "reset" @import "variable"

  변수랑 Mixin 애용함
  - 브랜드 컬러, 폰트, z-index 같이 반복되는 스타일은 변수로 관리하고,
  공통적인 스타일 패턴은 mixin으로 추출해서 재사용함
  - mixin은 변수로 받아서 js함수처럼 사용하기도 함


실무에서 사용하는 패키지 구조
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.module.scss // 해당 컴포넌트 전용 스타일
├── styles/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _reset.scss
│   └── main.scss (or index.scss) // 공통 SCSS 파일을 import (전역 스타일, 리셋 등)
*/