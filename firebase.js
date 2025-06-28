// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// We need to import the authentication services
import { getAuth, GoogleAuthProvider, onAuthStateChanged, getIdToken } from "firebase/auth";

// --- IMPORTANT: SECURITY WARNING! ---
// The configuration below contains secret keys.
// You should move these to a .env.local file in your project root.
// See the guide below this code block.
const firebaseConfig = {
  apiKey: "AIzaSyBOW7-VcOa4hjDD-3m__kcNXF47thzhDAI", // Replace with import.meta.env.VITE_API_KEY
  authDomain: "hope-connect-5e7e3.firebaseapp.com",     // Replace with import.meta.env.VITE_AUTH_DOMAIN
  projectId: "hope-connect-5e7e3",
  storageBucket: "hope-connect-5e7e3.appspot.com", // Typo corrected: .appspot.com
  messagingSenderId: "250806047336",
  appId: "1:250806047336:web:a50a6883921230a510a1dd",
  measurementId: "G-WNWB1R9JT9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const getCurrentUserToken = async () => {
    if (!auth.currentUser) {
        return null;
    }
    return await getIdToken(auth.currentUser);
};

export { onAuthStateChanged };

