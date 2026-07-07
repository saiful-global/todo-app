import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh8GY9WUjFDJz3F1rnOEJzFIDK2asVbKU",
  authDomain: "crud-460d2.firebaseapp.com",
  projectId: "crud-460d2",
  storageBucket: "crud-460d2.firebasestorage.app",
  messagingSenderId: "65912810604",
  appId: "1:65912810604:web:2f3054a034294e0c96fc49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;