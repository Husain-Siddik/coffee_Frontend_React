// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const apiKey = import.meta.env.VITE_API_KEY
const projectid = import.meta.env.VITE_projectId
const storagebucket = import.meta.env.storagebucket
const appid = import.meta.env.appid

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "coffee-store-auth-174a2.firebaseapp.com",
  projectId: projectid,
  storageBucket: storagebucket,
  messagingSenderId: "903719405528",
  appId: appid
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);