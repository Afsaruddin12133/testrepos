// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBNVXXeBVedhoJfp2PuhnlvtWo0lsg8QsI",
    authDomain: "test-a9ed3.firebaseapp.com",
    projectId: "test-a9ed3",
    storageBucket: "test-a9ed3.firebasestorage.app",
    messagingSenderId: "153772017731",
    appId: "1:153772017731:web:596b6166f87c5129122cf6"
  };
  
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
export { auth, provider };
