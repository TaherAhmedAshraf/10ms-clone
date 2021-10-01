import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCBrv4RMCqVDgYa7pdIYuX05WXjOeCTUKg",
    authDomain: "projects-bf4e7.firebaseapp.com",
    projectId: "projects-bf4e7",
    storageBucket: "projects-bf4e7.appspot.com",
    messagingSenderId: "60140371315",
    appId: "1:60140371315:web:8941339ae9011481fad906",
    measurementId: "G-PQT653NB6P"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase, useAuthState };