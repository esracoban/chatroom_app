// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFireStore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQBHt1vm1Z8urE386-lghXOdqrFP2vlUU",
  authDomain: "chatroom-245cd.firebaseapp.com",
  projectId: "chatroom-245cd",
  storageBucket: "chatroom-245cd.appspot.com",
  messagingSenderId: "1075941787966",
  appId: "1:1075941787966:web:0a3d0d70b180d6d5a8046f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// yetkilendirmeyi aktif eder
export const auth = getAuth(app);

// google ile yetkilendirme
export const provider = new GoogleAuthProvider();

// veritabanıyla aradaki bağlantıyı sağlar
export const db = getFireStore(app);