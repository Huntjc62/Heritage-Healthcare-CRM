// =========================================
// Firebase Configuration
// Heritage Healthcare CRM
// =========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Firebase Config

const firebaseConfig = {

    apiKey: "AIzaSyBjbUiOfMXuhMP3UHTbG6RE9ylZedB3XBc",

    authDomain: "heritage-healthcare-6a373.firebaseapp.com",

    projectId: "heritage-healthcare-6a373",

    storageBucket: "heritage-healthcare-6a373.firebasestorage.app",

    messagingSenderId: "862952622503",

    appId: "1:862952622503:web:ee327fae64ece49e084e82",

    measurementId: "G-43F1XVJNWX"

};

// Initialise Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);