// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "instagram-clone-a9f8a.firebaseapp.com",
  projectId: "instagram-clone-a9f8a",
  storageBucket: "instagram-clone-a9f8a.appspot.com",
  messagingSenderId: "310769110922",
  appId: "1:310769110922:web:b4430e85f9054d25bec273",
  measurementId: "G-GWMN0PYR2X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
