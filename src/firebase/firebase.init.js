// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSeMu0rpoL7ILBR4uexw_FNBCYvim0wkI",
  authDomain: "simple-firebase-521ea.firebaseapp.com",
  projectId: "simple-firebase-521ea",
  storageBucket: "simple-firebase-521ea.appspot.com",
  messagingSenderId: "364610702897",
  appId: "1:364610702897:web:bfb55902bf7fddb1060f10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app