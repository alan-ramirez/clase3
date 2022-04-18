// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBYZ9Qv8GpVE-Mx1Jq5rF-vxnvyR1Cq6Q",
  authDomain: "musicgearstore-alanramirez.firebaseapp.com",
  projectId: "musicgearstore-alanramirez",
  storageBucket: "musicgearstore-alanramirez.appspot.com",
  messagingSenderId: "167579573854",
  appId: "1:167579573854:web:fd9def73f98945ab8b9ecf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)