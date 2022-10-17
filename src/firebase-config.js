
// import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getFirestore } from 'firebase/firestore/lite';

// require("firebase/database");
// require('dotenv').config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "kambera-28897.firebaseapp.com",
  databaseURL: "https://kambera-28897-default-rtdb.firebaseio.com",
  projectId: "kambera-28897",
  storageBucket: "kambera-28897.appspot.com",
  messagingSenderId: "21370708893",
  appId: "1:21370708893:web:348d98c2199b72a8378574"
};

const app= initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;