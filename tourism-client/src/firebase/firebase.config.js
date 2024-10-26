// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtfTqswmiWOEffNg-e1WUXs8kTSY15ZCs",
  authDomain: "tourista-hub.firebaseapp.com",
  projectId: "tourista-hub",
  storageBucket: "tourista-hub.appspot.com",
  messagingSenderId: "132033287709",
  appId: "1:132033287709:web:8545224dafa62c698298f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);