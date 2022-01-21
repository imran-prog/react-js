// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5qUiwtMhYMUUSNt2FXSHGhENQgTbgqzE",
  authDomain: "react-air.firebaseapp.com",
  projectId: "react-air",
  storageBucket: "react-air.appspot.com",
  messagingSenderId: "636860749287",
  appId: "1:636860749287:web:94dc8289cb944166e09942",
  measurementId: "G-R0TXE4WR2C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
