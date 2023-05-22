import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCwa8WBuPkybFDxfuKH0ifXHOoPtOjAXkQ",
  authDomain: "fir-appauth-19aa3.firebaseapp.com",
  projectId: "fir-appauth-19aa3",
  storageBucket: "fir-appauth-19aa3.appspot.com",
  messagingSenderId: "65233791867",
  appId: "1:65233791867:web:5975e2ea8e8758811aabde",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export { auth, db };
