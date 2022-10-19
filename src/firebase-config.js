
import * as firebase from "firebase/app";
import "firebase/auth";


const db = firebase.initializeApp ({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID
});

export default db;




// // import * as firebase from "firebase/app";
// import { initializeApp } from "firebase/app";
// import "firebase/database";
// import { getFirestore } from 'firebase/firestore/lite';


// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.API_DOMAIN,
//   databaseURL: process.env.API_DATABASEURL,
//   projectId: process.env.API_PROJECTID,
//   storageBucket: process.env.API_STORAGEBUCKET,
//   messagingSenderId: process.env.API_MESSAGINGSENDERID,
//   appId: process.env.API_APIID
// };

// const app= initializeApp(firebaseConfig);

// const db = getFirestore(app);

// export default db;