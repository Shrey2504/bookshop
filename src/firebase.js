// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSw1p1IJVYkqrUlKMaCtt3FPKZM-uBOwA",
  authDomain: "book-shop-b9d42.firebaseapp.com",
  projectId: "book-shop-b9d42",
  storageBucket: "book-shop-b9d42.appspot.com",
  messagingSenderId: "1039901454367",
  appId: "1:1039901454367:web:91e9b53acc157a9ac0e52a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const fbDatabase = getDatabase(app);
export const db = getFirestore(app);
export const storage = getStorage(app);