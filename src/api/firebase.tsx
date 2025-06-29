import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9wqxTx3pa9PUcddkoajjsXL8ZCBMPNak",
  authDomain: "webcarros-f450c.firebaseapp.com",
  projectId: "webcarros-f450c",
  storageBucket: "webcarros-f450c.firebasestorage.app",
  messagingSenderId: "294724049658",
  appId: "1:294724049658:web:3495419362a2e3037b4743",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
