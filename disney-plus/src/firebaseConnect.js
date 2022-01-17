import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcRG3rKWV89C5ztyLcnMsN3Ch7fTjiiRA",
  authDomain: "disneyplus-22f3a.firebaseapp.com",
  projectId: "disneyplus-22f3a",
  storageBucket: "disneyplus-22f3a.appspot.com",
  messagingSenderId: "460034140291",
  appId: "1:460034140291:web:b12944e7c76f100d0653b6",
  measurementId: "G-LM2DY4Y2RP",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const storage = getStorage(firebaseApp);

export { auth, storage };
export default db;
