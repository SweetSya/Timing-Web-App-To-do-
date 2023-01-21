// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAByC314nkGU8KKWmOcrYO80ZHOKmbyrWw",
  authDomain: "note-project-c133c.firebaseapp.com",
  projectId: "note-project-c133c",
  storageBucket: "note-project-c133c.appspot.com",
  messagingSenderId: "591303083370",
  appId: "1:591303083370:web:ba4651d053418b61571113",
  measurementId: "G-SW46G22G2X"
};

// Initialize Firebase
const fstore = initializeApp(firebaseConfig);
const db = getFirestore(fstore)

export {db}