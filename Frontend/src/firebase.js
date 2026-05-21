import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrGZT47-Nag_-ezI2Xiu7a2v2zcXDxbw8",
  authDomain: "echocare-b965d.firebaseapp.com",
  projectId: "echocare-b965d",
  storageBucket: "echocare-b965d.firebasestorage.app",
  messagingSenderId: "1034173645929",
  appId: "1:1034173645929:web:a82ca09c0553d6b32ccef8",
  measurementId: "G-PHSPX9CYLW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);