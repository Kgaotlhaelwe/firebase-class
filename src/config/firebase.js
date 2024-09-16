// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCQ-9ClK7s80XvVGUak-TlBA2UunLm7d1o",
  authDomain: "limpopo-firebase-class.firebaseapp.com",
  projectId: "limpopo-firebase-class",
  storageBucket: "limpopo-firebase-class.appspot.com",
  messagingSenderId: "734557935548",
  appId: "1:734557935548:web:702cd0572b5ad437eefdb9",
  measurementId: "G-194G8CP7PP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =  getAuth(app) ;
const db = getFirestore(app)

export {auth , db}