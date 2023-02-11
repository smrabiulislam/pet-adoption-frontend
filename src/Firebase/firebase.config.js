// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0iKJuXjnAnwchx1kwo_47FSWFj5nX_MI",
    authDomain: "pet-adoption-977e0.firebaseapp.com",
    projectId: "pet-adoption-977e0",
    storageBucket: "pet-adoption-977e0.appspot.com",
    messagingSenderId: "221044057515",
    appId: "1:221044057515:web:fa266516e826a7bcfb5eee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;