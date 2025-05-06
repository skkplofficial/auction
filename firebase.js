import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8hFmSI3Ux18O5S64C_priCwFY2VZc63Q",
  authDomain: "skkpl-auction.firebaseapp.com",
  projectId: "skkpl-auction",
  storageBucket: "skkpl-auction.appspot.com",
  messagingSenderId: "768208044535",
  appId: "1:768208044535:web:4c33ac6050b209c2692ef2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };