// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBQkjilZNKxw3LhZ0t8Ha774RifQYr-HU",
  authDomain: "fir-practice-fc5c7.firebaseapp.com",
  projectId: "fir-practice-fc5c7",
  storageBucket: "fir-practice-fc5c7.firebasestorage.app",
  messagingSenderId: "534056611172",
  appId: "1:534056611172:web:32ac25adfdabc62e0f5e71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();


