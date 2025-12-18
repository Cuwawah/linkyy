import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {

  apiKey: "AIzaSyDiBZkN0iR8e2xLx3MfKBQyR5scU4bcbLs",

  authDomain: "url-shortener-e3376.firebaseapp.com",

  projectId: "url-shortener-e3376",

  storageBucket: "url-shortener-e3376.firebasestorage.app",

  messagingSenderId: "907774453986",

  appId: "1:907774453986:web:f0acd6f68a8e3213c556bb"

};
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };