import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRTzLvFp2ZtH_50YMhgQCTjPQ3y5N3Z44",
  authDomain: "deal-d1948.firebaseapp.com",
  projectId: "deal-d1948",
  storageBucket: "deal-d1948.firebasestorage.app",
  messagingSenderId: "218295941376",
  appId: "1:218295941376:web:1e61abf974ca7ecf86dbe5",
  measurementId: "G-Y2G6EESTSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

// Initialize Analytics
export const analytics = getAnalytics(app);

export default app;

