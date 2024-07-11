import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDjf_ERfPXZ8lo5ndt5ABG2aCVUwozHkMY",
  authDomain: "wanderapp2024.firebaseapp.com",
  projectId: "wanderapp2024",
  storageBucket: "wanderapp2024.appspot.com",
  messagingSenderId: "849163204057",
  appId: "1:849163204057:web:b82bdb53ee1b2e1fab95c8",
  measurementId: "G-FE9M2JWDM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword, signOut };

