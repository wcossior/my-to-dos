import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCAgECQXwc8p0Q8iT6QREIAPFldeR3x6GU",
    authDomain: "todoswebsite-f2d31.firebaseapp.com",
    projectId: "todoswebsite-f2d31",
    storageBucket: "todoswebsite-f2d31.appspot.com",
    messagingSenderId: "775353386962",
    appId: "1:775353386962:web:2e0bf707ce5ef731dd6a0b",
    measurementId: "G-5DS7209N29"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, analytics, db };