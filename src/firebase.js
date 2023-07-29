import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyA64j3B2BV6xgo16viQopqWNazz9WJ-Bg8",
  authDomain: "facebook-clone-d7f2c.firebaseapp.com",
  projectId: "facebook-clone-d7f2c",
  storageBucket: "facebook-clone-d7f2c.appspot.com",
  messagingSenderId: "135047961443",
  appId: "1:135047961443:web:a467a7af8c0dcb5bf29156",
  measurementId: "G-CPKQ34YFEM"
};


//from this part on, it might be difficult to connect, because it didn't work last time
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, db, provider };