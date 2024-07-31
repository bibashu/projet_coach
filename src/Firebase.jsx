
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDUsTEkcNZcw6uMn0SUmjK5rt1SkX7I66c",
  authDomain: "projetcoach-18da8.firebaseapp.com",
  projectId: "projetcoach-18da8",
  storageBucket: "projetcoach-18da8.appspot.com",
  messagingSenderId: "114646736832",
  appId: "1:114646736832:web:5bdeca08626b8bac01b225"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}