// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAL_7GD1aDya-3aapjbfeBoPvq80uFs_M",
    authDomain: "pentenica.firebaseapp.com",
    projectId: "pentenica",
    storageBucket: "pentenica.appspot.com",
    messagingSenderId: "342425392705",
    appId: "1:342425392705:web:e8e162a3efb6f024a658c0"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth