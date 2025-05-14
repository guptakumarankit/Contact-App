// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2keRjH4oCdusRcReh0_QgkfwV5GwBP-0",
  authDomain: "contact-app-12055.firebaseapp.com",
  projectId: "contact-app-12055",
  storageBucket: "contact-app-12055.firebasestorage.app",
  messagingSenderId: "725311897980",
  appId: "1:725311897980:web:5c798f89368ceced4924f9",
  measurementId: "G-LCE1M3WWPX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);