// Import the functions you need from the SDKs you need
import  firebase  from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiUWHlqtTh_s40jaqZ-Tn-0jHmExKdt9g",
  authDomain: "latest-e-clone.firebaseapp.com",
  projectId: "latest-e-clone",
  storageBucket: "latest-e-clone.appspot.com",
  messagingSenderId: "931700328050",
  appId: "1:931700328050:web:f3ccf6b0e986a81d92a4eb",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();


