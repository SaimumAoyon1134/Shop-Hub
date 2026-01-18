// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAs2tqxufM5Nlc4KrkuldKQJt4Efh7bII",
  authDomain: "shop-hub-8a6a3.firebaseapp.com",
  projectId: "shop-hub-8a6a3",
  storageBucket: "shop-hub-8a6a3.firebasestorage.app",
  messagingSenderId: "539602457230",
  appId: "1:539602457230:web:d44bc56bb3d0e92b37efdf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
