import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: ENTER_API_KEY,
  authDomain: ENTER_authDomain,
  projectId: ENTER_projectId,
  storageBucket: ENTER_storageBucket,
  messagingSenderId: ENTER_messagingSenderId, 
  appId: ENTER_appId,
  measurementId: ENTER_measurementId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const db = getFirestore(app)

