// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV9hNmttbpWONJ4A7FPxDFS8BzJpWq9MA",
  authDomain: "travel-sense-e6bcf.firebaseapp.com",
  projectId: "travel-sense-e6bcf",
  storageBucket: "travel-sense-e6bcf.appspot.com",
  messagingSenderId: "230453995090",
  appId: "1:230453995090:web:b1b67a1011e97730d3218b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
