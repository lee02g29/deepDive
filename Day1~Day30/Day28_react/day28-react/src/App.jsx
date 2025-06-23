import { useEffect } from "react";
import { db } from "./firebase";
import axios from "axios";
import { set, ref, get } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import Signup from "./signup/Signup";

function App() {
  // const DBURL =
  //   "https://frontendperdy-default-rtdb.asia-southeast1.firebasedatabase.app/";

  // console.log(db);

  // const data = {
  //   name: "perdy",
  //   email: "perdy@g.m",
  // };

  // const data2 = {
  //   name: "perdy2",
  //   email: "perdy2@g.m",
  // };

  // set() : 기존에 있던 내용을 덮어쓰기함

  /*
    실제 파이어베이스는 각각의 고유한 키를 이용해서
    데이터를 저장해야함
  */
  // useEffect(() => {
  //   console.log("실행됨");

  //   // 데이터 가져오기
    // const readData = async () => {
    //   try {
    //     const resData = await get(ref(db, "users"));
    //     console.log(resData.val());
    //     // 데이터를 객체형태로 꺼냄
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };

    // readData();

  //   console.log("고유한 값 : ", uuidv4());

  //   // 데이터 추가
  //   const writeData = () => {
  //     set(ref(db, `users/${uuidv4()}`), data)
  //       .then(() => console.log("데이터 추가 성공"))
  //       .catch((err) => console.error("데이터 추가 실패", err));
  //   };

  //   writeData();
  // }, []);

  return (
    <>
      {/* <div className="bg-blue-100 text-white p-2 m-2 text-xl rounded-xl">
        간단한 테일윈드 라이브러리
        기본적인 디자인 크기는 4px
      </div> */}
      <Signup />
    </>
  );
}

export default App;

/*
  Firebase 
  - 구글이 제공하는 실시간 데이터베이스, 인증, 스토리지 등
  다양한 기능을 제공하는 백엔드 플랫폼

  리액트에서 Firebase를 사용할 수 있도록 라이브러리 다운
  npm install firebase
*/
