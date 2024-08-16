import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBpFnwOy8walgMxoYBX9I4LK6VJhNsagU8",
  authDomain: "buying-selling-4fd21.firebaseapp.com",
  projectId: "buying-selling-4fd21",
  storageBucket: "buying-selling-4fd21.appspot.com",
  messagingSenderId: "687685086795",
  appId: "1:687685086795:web:bba64919cd2a91fe5fa7ce",
  measurementId: "G-63FW6LM80K"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
