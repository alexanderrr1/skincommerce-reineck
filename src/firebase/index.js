import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBwneCOaTH7v5Oq6UEbenkTGYXaYIsThSQ",
    authDomain: "skincommerce-d699b.firebaseapp.com",
    projectId: "skincommerce-d699b",
    storageBucket: "skincommerce-d699b.appspot.com",
    messagingSenderId: "356147095668",
    appId: "1:356147095668:web:49ffd8ad45b123e1090921"
});

export function getFirebase() {
    return  app;
}

export function getFirestore() {
    return firebase.firestore(app);
}