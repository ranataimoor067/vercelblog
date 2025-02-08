// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  // apiKey: process.env.VITE_FIREBASE_API_KEY,
 apiKey: "AIzaSyDrqtdZYKiiod_1ruAjHr-3WWqk1i1xvvg",
  authDomain: "blog-d0ea3.firebaseapp.com",
  projectId: "blog-d0ea3",
  storageBucket: "blog-d0ea3.firebasestorage.app",
  messagingSenderId: "679454293289",
  appId: "1:679454293289:web:11b671a48a9518cf540b38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
