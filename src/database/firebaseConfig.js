
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABsJeYRaSYMDYxB4EJ4rxQPUE8In4C4Yo",
  authDomain: "admeventos-7c02a.firebaseapp.com",
  projectId: "admeventos-7c02a",
  storageBucket: "admeventos-7c02a.appspot.com",
  messagingSenderId: "816176535044",
  appId: "1:816176535044:web:2b7113441003519e12c751"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
