// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
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
const auth = getAuth(app);

// Signin With Google
// Google Authentication with popup
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
      });
    }
  } catch (e) {
    console.error(e);
    alert(e.message);
  }
};

// Google Authentication with Email
const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    console.error(e);
    alert(e.message);
  }
};

// Register with Email and Password
const registerEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log(user);
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
    });
  } catch (e) {
    console.error(e);
    alert(e.message);
  }
};

// Password Reset Link
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("password reset link sent!!!");
  } catch (e) {
    console.error(e);
    alert(e.message);
  }
};

// Logout Function
const logout = () => {
  signOut(auth);
};

// Exporting all the functions
export {
  auth,
  db,
  signInWithGoogle,
  loginWithEmailAndPassword,
  registerEmailAndPassword,
  sendPasswordReset,
  logout,
};
