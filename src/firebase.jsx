
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfTqMAMYq3kmS2WQWVq3he7hEm9bQ7GOo",
  authDomain: "deep-portfolio-8ee7f.firebaseapp.com",
  projectId: "deep-portfolio-8ee7f",
  storageBucket: "deep-portfolio-8ee7f.appspot.com",
  messagingSenderId: "1055103500547",
  appId: "1:1055103500547:web:1cb1b53bde4044147fa936"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const  db = getFirestore()



