import ArrayExample from "@/components/ArrayExample";
import EnumExample from "@/components/EnumExample";
import ObjectExample from "@/components/ObjectExample";
import TotalExample from "@/components/TotalExample";

export default function Home() {

  // 자바스크립트식
  // let num = 10;
  // num = "hello"
  // 이렇게 변경해도 OK

  // 숫자 (실수를 모두 포함)
  let age : number = 25;
  let height : number = 3.14;
  let mins : number = -5;

  const infinite : number = Infinity;
  const notANumber : number = NaN;

  // string 문자열
  let name : string = "perdy";
  let address: string = "경기도"

  // boolean
  let isNumber : boolean = true;
  let isLogin : boolean = false;


  return (
    <div>
      <h1>타입 스크립트</h1>
      {/* <ArrayExample />
      <ObjectExample /> */}

      <TotalExample />
      <EnumExample />
    </div>
  );
}

/*
  타입스크립트
  - 자바스크립트에서 확장된 언어
  - 자바스크립트는 모든 것을 허용함

  타입스크립트를 쓰는 이유
  - 자유로운 언어를 쓰다보니 문법이 유연해지고, 그로 인해 버그들이 발생함
    - 타입 시스템(언어 타입과 관련된 문법 체계를 모아둔 것)을 도입하여 코드의 동작을 더 엄격히 정의하기로 했음
  - 타입스크립트는 자바스크립트와 달리 브라우저에서 실행하려면, 파일을 한번 변환을 함
    - 이 과정을 컴파일이라고 함

  타입은 2가지로 나뉨
  - 정적 타입 시스템(자바, C++)
    - 코드가 실행 이전 모든 변수의 타입을 고정적으로 결정함
    - 프로그램이 실행 중에(런타임에) 오류를 최대한 줄이고, 메모리 기능을 향상하기 위해서 사용

  - 동적 타입 시스템(ex : 파이썬, 자바스크립트, 루비)
    - 코드를 실행하고나서 유동적으로 변수의 타입을 결정함
      - 빠른 프로토타이핑과 스크립팅에 유리함
      - 다양한 타입의 데이터를 쉽게 처리할 수 있음

  타입스크립트에서 is는 함수가 특정 조건을 만족하면 매개변수가 어떤 타입인지를 보장함

  기본적으로 대부분의 언어에서는 'is 접두사 변수나 함수가 boolean 타입을 나타낸다'라는 뜻으로 사용됨 
*/