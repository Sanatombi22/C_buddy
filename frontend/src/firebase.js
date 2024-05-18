// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // add apikey from firebase  
  apiKey: " ", 
  authDomain: "cbuddy-91d74.firebaseapp.com",
  projectId: "cbuddy-91d74",
  storageBucket: "cbuddy-91d74.appspot.com",
  messagingSenderId: "455110731609",
  appId: "1:455110731609:web:723797bffc4865ca8e0e48",
  measurementId: "G-X8V7JXKGGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
