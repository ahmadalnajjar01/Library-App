import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzGYLfHwtWftYp7EseBQoHznikGT87Kyc",
  authDomain: "najjar-d130a.firebaseapp.com",
  projectId: "najjar-d130a",
  storageBucket: "najjar-d130a.firebasestorage.app",
  messagingSenderId: "346762362935",
  appId: "1:346762362935:web:e9a0ed4200fe1c36c67fb2",
  measurementId: "G-NQSQF4B6CQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
