import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { collection, addDoc } from "firebase/firestore";

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
const db = getFirestore();
const auth = getAuth();
const storage = getStorage(firebaseApp);

// Add data
// const addDataToFirebase = () => {
//   try {
//     const docRef = addDoc(collection(db, "movies"), {
//       "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/28F85D4A1F7CA135B7B20B3EDB42EDA73196C2A71C52C5400A6C2285F8E071BE/scale?width=1440&aspectRatio=1.78&format=jpeg",
//             "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B32D8CB7C0C358E9FF348FB0338AD13F9A5836808E9EF5FADD9DBDE52FC3CAD/scale?width=400&aspectRatio=1.78&format=jpeg",
//             "description": "J-Pop band Perfume is featured in this original music and documentary series 'Disney’s My Music Story.' The show features Perfume's life stories, passion for music, Disney memories, and more.",
//             "subTitle": "2019 • 53m • Documentary, Biographical, Music",
//             "title": "My music story",
//             "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/97BB36F8B9FC053F561894DD7B1C42C4FD20E63560F481CBCB3B9D3600CFCA3B/scale?width=1440&aspectRatio=1.78",
//             "type": "new"
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };

// const addData = addDataToFirebase();

export { auth, storage };
export default db;
