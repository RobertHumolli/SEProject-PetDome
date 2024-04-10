import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2_rvx9dkD0bmb8dpGk4q2G5pVUac9ufk",
  authDomain: "pet-domedb.firebaseapp.com",
  projectId: "pet-domedb",
  storageBucket: "pet-domedb.appspot.com",
  messagingSenderId: "587809606568",
  appId: "1:587809606568:web:0518d5e1a8d81dd2cd6b9d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);  


export { auth, db };
