// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxf4vljHR3NoWz6xfJinwsBSKVjEiFZzc",
  authDomain: "coffee-store-auth-174a2.firebaseapp.com",
  projectId: "coffee-store-auth-174a2",
  storageBucket: "coffee-store-auth-174a2.firebasestorage.app",
  messagingSenderId: "903719405528",
  appId: "1:903719405528:web:e88acc5bb54012efbb54ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);