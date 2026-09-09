import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxPk25wUOLqFmCSDtBGApKnfqtHQegO_8",
  authDomain: "heritage-healthcare-crm.firebaseapp.com",
  projectId: "heritage-healthcare-crm",
  storageBucket: "heritage-healthcare-crm.firebasestorage.app",
  messagingSenderId: "797065156423",
  appId: "1:797065156423:web:90bc77d633b429440c1e62"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
