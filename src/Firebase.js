import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBUYMxZ3tVz7ssZHSOZ0H4PLhnBeLt2Y0k",
  authDomain: "developer-library-cd7b0.firebaseapp.com",
  projectId: "developer-library-cd7b0",
  storageBucket: "developer-library-cd7b0.appspot.com",
  messagingSenderId: "1046239064377",
  appId: "1:1046239064377:web:6bbc98760d3c29ded7b8e8",
  measurementId: "G-5Z3JEMXL6C",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
