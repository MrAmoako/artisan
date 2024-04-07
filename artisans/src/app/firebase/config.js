import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDH_uk16cRgo5Z8bBaXGdNDCndE227oZz4",
  authDomain: "artisan-management-syste-c3f15.firebaseapp.com",
  databaseURL: "https://artisan-management-syste-c3f15-default-rtdb.firebaseio.com",
  projectId: "artisan-management-syste-c3f15",
  storageBucket: "artisan-management-syste-c3f15.appspot.com",
  messagingSenderId: "547765195194",
  appId: "1:547765195194:web:aefe93ce9c37bc7ffe0d83",
  measurementId: "G-95ZQTS74DW"
  
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app); 

// Initialize Firestore

export { app, auth, firestore };

