import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";

/*
  this.props.onMenuOpen is not a function
  원인

  1.
  - Select 태그를 가지고 올 때, 경로가 잘못되어 다른 Select태그를 가져와서
  사용법이 달라 문제가 발생함
  - import Select from "react-select"

  2.
  - 다른 것을 가져와서 동작법에 onMenuOpen 함수를 동작할 수 있도록 이벤트를 연결하지 않아서
  에러가 발생  
  - 전달되는 값이 없고 함수가 아니어서 에러가 발생
*/

// 1. 옵션 만들기
const options = [
  { value: "초콜릿", label: "초콜릿" },
  { value: "다크초콜릿", label: "다크초콜릿" },
  { value: "밀크초콜릿", label: "밀크초콜릿" },
];

export default function ReactSelect1() {
  // 2. 선택된 옵션을 변수에 저장
  const [selectOption, setSelectOption] = useState(null);
  const { register, handleSubmit } = useForm();

  // 3. 이벤트 함수 만들기
  const handleChange = (option) => {
    console.log("선택된 값", option);
    setSelectOption(option);
  };

  // 폼 데이터 확인
  const onSubmit = (data) => {
    console.log('선택된 옵션 :', JSON.stringify(data,null, 2))
    console.log('제출된 폼 데이터 :', data)
  }

  return (
    <div style={{ width: 300 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          {...register('chocolate')}
          options={options} // 드롭다운 옵션
          value={selectOption} // 현재 선택된 값
          placeholder="초콜릿 맛을 선택하세요"
          onChange={handleChange}
          isClearable
        />

        <button type="submit">제출</button>
      </form>
    </div>
  );
}
// 안되는 예시임

/*
react-hook-form
- select 태그를 html 폼과 연결해서 useForm()으로 관리할 수 있음
- 외부 라이브러리로 받아온 UI들은 register가 연결을 못함

register는 브라우저 기본 input. select에서는 잘 동작함
외부 라이브러리들은 Controller를 이용해서 연결해야함
- 직접 ref와 value를 제어하지 못함. 따라서, register()로 연결이 불가능
*/
