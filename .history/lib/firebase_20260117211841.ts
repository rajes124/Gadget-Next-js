import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvBJhLa10oqdlcbmkKFgUltEKyrTwjIMk",
  authDomain: "techgad-get.firebaseapp.com",
  projectId: "techgad-get",
  storageBucket: "techgad-get.firebasestorage.app",
  messagingSenderId: "129611510027",
  appId: "1:129611510027:web:4d41bc17581bfff22e320e",
  measurementId: "G-ZS9JZGP2KL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
