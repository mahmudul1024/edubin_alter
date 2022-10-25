import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCA7HwzN3_SpWFcyIiIRxQABCTGqMbLYVg",
  authDomain: "edubin-e7408.firebaseapp.com",
  projectId: "edubin-e7408",
  storageBucket: "edubin-e7408.appspot.com",
  messagingSenderId: "852160158631",
  appId: "1:852160158631:web:a0abcca63badd72c303482",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
