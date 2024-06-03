// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDSrtywD584RLtGYA4Jl31tjY-TdBdWGYc",
    authDomain: "login-auth-f00ce.firebaseapp.com",
    projectId: "login-auth-f00ce",
    storageBucket: "login-auth-f00ce.appspot.com",
    messagingSenderId: "1044194017112",
    appId: "1:1044194017112:web:6c91f061ff9de3660c6f2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;