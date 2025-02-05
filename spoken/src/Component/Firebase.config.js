import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUFvhe1yRhtkE_5_JxWElgNIbBprI5w_4",
  authDomain: "otp-project-6f5b2.firebaseapp.com",
  projectId: "otp-project-6f5b2",
  storageBucket: "otp-project-6f5b2.appspot.com",  // Fixed typo here
  messagingSenderId: "546782208124",
  appId: "1:546782208124:web:f9ecb05950d52d5c2469f9",
  measurementId: "G-0F83M1Y1BP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
