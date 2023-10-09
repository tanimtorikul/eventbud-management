
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYC6R7gQL8UfS1G5ocK-OqJJ8UI8zLXmU",
  authDomain: "event-management-auth-709cc.firebaseapp.com",
  projectId: "event-management-auth-709cc",
  storageBucket: "event-management-auth-709cc.appspot.com",
  messagingSenderId: "427252361",
  appId: "1:427252361:web:ac01d0893db8212f854458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;