// Import the functions you need from the SDKs you need

// firebase 앱을 초기화하는 함수
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "frontendperdy.firebaseapp.com",
  databaseURL: "https://frontendperdy-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "frontendperdy",
  storageBucket: "frontendperdy.firebasestorage.app",
  messagingSenderId: "970934719398",
  appId: "1:970934719398:web:6462d3cf1e0804df06b567",
  measurementId: "G-X2PZ8Q2KTF"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// get() 데이터 조회(가져오기)
// set() 데이터 쓰기(추가)

// 사용할 서비스 선택

// 1. 인증
const auth = getAuth(app)

// 2. 파이어베이스에서 데이터베이스 서비스를 수용할 수 있는 객체
export const db = getDatabase(app);