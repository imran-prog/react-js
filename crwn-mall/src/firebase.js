// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRpwQ_yE9fgug8Ll7lOi2HsdoPgiFE76U",
  authDomain: "crwn-shop-95f37.firebaseapp.com",
  projectId: "crwn-shop-95f37",
  storageBucket: "crwn-shop-95f37.appspot.com",
  messagingSenderId: "699931929591",
  appId: "1:699931929591:web:8e0852bd502e993fd29cf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signin With Google PopUp
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (e) {
    console.error(e);
    alert(e.message);
  }
};

export default signInWithGoogle;
