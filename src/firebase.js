import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDMECQf_Pq1_2iLHRUC8Q6gXCuVQ_SVGV0",
  authDomain: "chat-82fe1.firebaseapp.com",
  projectId: "chat-82fe1",
  storageBucket: "chat-82fe1.appspot.com",
  messagingSenderId: "1077659818172",
  appId: "1:1077659818172:web:650ed46275b8bd2869d8b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
