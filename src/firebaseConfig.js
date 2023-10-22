// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdhUbbDbnd-6G96DNgBtwfi_Ea_Etc8z0",
    authDomain: "practice-40bf7.firebaseapp.com",
    projectId: "practice-40bf7",
    storageBucket: "practice-40bf7.appspot.com",
    messagingSenderId: "502133090920",
    appId: "1:502133090920:web:2e3fb21181c52cdc77e9dd",
    measurementId: "G-YEHKXJFFYH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
