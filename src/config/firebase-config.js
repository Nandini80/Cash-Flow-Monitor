// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDLYB7GRr_mprtdwgIDJnoIZmH8eUBga4",
  authDomain: "expense-tracker-ec5dd.firebaseapp.com",
  projectId: "expense-tracker-ec5dd",
  storageBucket: "expense-tracker-ec5dd.appspot.com",
  messagingSenderId: "362366832409",
  appId: "1:362366832409:web:454bf7a70950943d1f3f88",
  measurementId: "G-VEC3XXYJEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);

//firebase login
//firebase init
//firebase deploy