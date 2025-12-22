// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3UreCvM24_3Im2rqo1K9DxdNoSrASI_4",
  authDomain: "mahbub-c6827.firebaseapp.com",
  projectId: "mahbub-c6827",
  storageBucket: "mahbub-c6827.appspot.com", 
  messagingSenderId: "310433142309",
  appId: "1:310433142309:web:2ae0b982ee5c76bf9311cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)