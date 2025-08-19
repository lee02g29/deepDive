import React from 'react'

export default function EnumExample() {

  enum Role {
    User, // 자동으로 0이 저장
    Admin = 10, // 자동으로 10이 저장
  }

  enum Orderstatus {
    Pending = "PENDING",
    Paid = "PAID",
  }

  enum names {
    Perdy,
    Escher,
    Gerdie,
  }

  let status = "배송중"
  status="배송하는중" // 오류에 안잡힘

  console.log(names.Perdy)

  // key를 이용한 접근 또는 인덱스 번호로 접근 가능
  console.log(names[0]);

  return (
    <div>EnumExample</div>
  )
}

/*
  Enum
  - 열거형
  - 관련된 하나의 이름으로 그룹화하는 타입
  - 상태값, 옵션값, 코드 값을 표현할 때 사용
  
  enum 숫자형, 문자형 타입
    - 숫자형 : 자동으로 0부터 시작해서 1씩 증가
    - 문자형 : 직접 문자열 값을 부여해서 사용
  
  쓰는 이유
  - 논리적 오류가 발생할 수 있는 것을 방지하기 위해 사용

*/