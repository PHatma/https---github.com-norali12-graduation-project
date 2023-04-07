// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaOZT0fy5p5KUYrBE9nqW7b6KYajyegKk",
  authDomain: "graduationproject-f005f.firebaseapp.com",
  projectId: "graduationproject-f005f",
  storageBucket: "graduationproject-f005f.appspot.com",
  messagingSenderId: "764327053774",
  appId: "1:764327053774:web:854b05b300c9de67c3839f",
  measurementId: "G-3Y59LHRBXV"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, db, auth ,analytics};
