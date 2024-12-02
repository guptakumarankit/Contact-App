// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM53ZP97rsXVg9X2bf4jSKOE78PAOevsE",
  authDomain: "contact-app-82be1.firebaseapp.com",
  projectId: "contact-app-82be1",
  storageBucket: "contact-app-82be1.firebasestorage.app",
  messagingSenderId: "288877676080",
  appId: "1:288877676080:web:e77a0af0ecf5d0799bcff5",
  measurementId: "G-YRLME8SMT2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);