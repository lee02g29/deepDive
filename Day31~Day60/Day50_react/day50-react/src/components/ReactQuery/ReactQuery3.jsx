import { useQuery } from "@tanstack/react-query";
import React from "react";

const MINUTE = 1000 * 60;

function fetchUser() {
  // 여기에도 return 해주기 - 리액트 쿼리가 원하는 형태의 return
  return fetch(`https://jsonplaceholder.typicode.com/users/1`).then((res) => {
    if (!res.ok) throw new Error("API 요청 실패");
    return res.json();
  });
}

export default function ReactQuery3() {
  //
  const { staleTime, data: userName, isLoading, isFetching} = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,

    // 데이터를 얼마나 자주 불러올지.
    /* 단순 숫자로 작성하면 알아보기 어려워서 권장하지 않음
      실무에서 많이 사용하는 방법 
      - 1000 * 60 * 2 (권장)

      - const MINUTE = 1000 * 60;
        - staleTime: MINUTE * 2
        - 가장 많이 사용하는 방법
    */
    staleTime: MINUTE * 2,
    // 창이 다시 포커스를 얻었을 때, 데이터를 가져올지 여부, 기본값 true
    refetchOnWindowFocus : true,

    // 사용자 정보 일부만 꺼내기
    select: (data) => data.name
    // onSuccess(), onError
  });

  return <div>
    {
      userName && <p>{userName}</p>
    }
  </div>;
}

/*
  StaleTime
  기본 값 0 -> 데이터가 fetch 이후 즉시 stale(오래됨) 상태가 됨
  맵 포커스 변경시, 네트워크 다시 연결시, 컴포넌트 다시 마운트 시 데이터를 자동 재 요청을 할 수 있음

  실시간 데이터 필요(알림), 변경이 적은 데이터(마이 페이지)
  뉴스 피드 처럼 일정 시간마다 갱신
*/