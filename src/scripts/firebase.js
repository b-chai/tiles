// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtgmzOtYzT4haYU7HzLNVmIMBLPG-AWJM",
  authDomain: "tiles-70b64.firebaseapp.com",
  projectId: "tiles-70b64",
  storageBucket: "tiles-70b64.appspot.com",
  messagingSenderId: "768965920948",
  appId: "1:768965920948:web:b0ce57f7e2fb695725efe1",
  measurementId: "G-MTS57PBQW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase.firestore();