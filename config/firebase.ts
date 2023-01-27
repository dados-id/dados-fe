// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: "dados-19a39.firebaseapp.com",
    projectId: "dados-19a39",
    storageBucket: "dados-19a39.appspot.com",
    messagingSenderId: "524769646417",
    appId: "1:524769646417:web:ac8768605ba8a432556570",
    measurementId: "G-KLHB4PD5WR",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
