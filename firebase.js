// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp} from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7-H9AM3IC18hWs8dRNMP0SJ9sa58LPh4",
  authDomain: "selfregulator-318002.firebaseapp.com",
  projectId: "selfregulator-318002",
  storageBucket: "selfregulator-318002.appspot.com",
  messagingSenderId: "839723723337",
  appId: "1:839723723337:web:4d1dcd74dcab93a62e6d98",
  measurementId: "G-ST0GV4JVBE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();

// Prepare Database
const db = getFirestore();

// Initilise Storage
const storage = getStorage();

export { app, db, storage };