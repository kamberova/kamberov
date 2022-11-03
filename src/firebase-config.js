
// import * as firebase from "firebase/app";
// import "firebase/auth";


// const db = firebase.initializeApp ({
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_API_ID
// });

// export default db;




import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import 'firebase/storage';


const firebaseConfig = {

  // apiKey: "AIzaSyBD6bIbamynvjsNbDJJ1zY4nmBP5JFO5Ms",
  // authDomain: "kambera-685c9.firebaseapp.com",
  // projectId: "kambera-685c9",
  // storageBucket: "kambera-685c9.appspot.com",
  // messagingSenderId: "759438117224",
  // appId: "1:759438117224:web:76844995fb1e3c24352edd",
  // measurementId: "G-NGW2JR0CL9"
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;