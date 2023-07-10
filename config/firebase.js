import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIQhmD66xCF3E5CsEOfhT50aqTh-EdAAc",
  authDomain: "courtai.firebaseapp.com",
  projectId: "courtai",
  storageBucket: "courtai.appspot.com",
  messagingSenderId: "139580026998",
  appId: "1:139580026998:web:65556b7b6af3b64bd76f57",
  measurementId: "G-7CSNGC76WB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const db = getFirestore(app)

