import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEx8fuJH9McXrlMX-I7uUD-Dyt_ldQunM",
  authDomain: "business-plan-app-ee908.firebaseapp.com",
  projectId: "business-plan-app-ee908",
  storageBucket: "business-plan-app-ee908.appspot.com",
  messagingSenderId: "152879936691",
  appId: "1:152879936691:web:92517c000c3aa2d7692cc6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 3 Imports
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
