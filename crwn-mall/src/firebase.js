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

const date = new Date();

// Signin With Google PopUp
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({});
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = await query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
        joinedDate: date.toLocaleDateString(),
      });
    }
  } catch (e) {
    console.error(e);
    alert(e.message);
  }
};

// SignUp with Email and Password
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
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      joinedDate: date.toLocaleDateString(),
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

// Logout
const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  loginWithEmailAndPassword,
  registerEmailAndPassword,
  sendPasswordReset,
  logout,
};
