// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAL1wWHmZ_746NpyBNFbf-0avuOIycaWIw",
    authDomain: "packaging-express.firebaseapp.com",
    projectId: "packaging-express",
    storageBucket: "packaging-express.appspot.com",
    messagingSenderId: "125926735380",
    appId: "1:125926735380:web:58f949bc780c29f3aab101",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
