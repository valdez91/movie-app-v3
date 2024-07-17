// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // Remove this line if analytics is not needed

const firebaseConfig = {
  apiKey: "AIzaSyBGMlToEGlVwCzObgPtxHWW66nfU1Avtuo",
  authDomain: "mtandao-v2.firebaseapp.com",
  projectId: "mtandao-v2",
  storageBucket: "mtandao-v2.appspot.com",
  messagingSenderId: "201166176022",
  appId: "1:201166176022:web:0af27cd7512d1ae6895a37",
  measurementId: "G-M422SDHHD1"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Remove this line if analytics is not needed
export const auth = getAuth(app);
