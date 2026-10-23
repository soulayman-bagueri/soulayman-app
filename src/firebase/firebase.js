// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUSo3iy4lNYlsOb9XZYxGiaNpIRBkLeWM",
  authDomain: "information-3347b.firebaseapp.com",
  databaseURL: "https://information-3347b-default-rtdb.firebaseio.com",
  projectId: "information-3347b",
  storageBucket: "information-3347b.firebasestorage.app",
  messagingSenderId: "646081909452",
  appId: "1:646081909452:web:ff0788ee96d15e26bee869",
  measurementId: "G-CNK9620JN2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);