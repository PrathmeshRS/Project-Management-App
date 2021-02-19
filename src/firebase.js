import firebase from "firebase";

const firebaseConfig = {
    authDomain: "task-table-139e9.firebaseapp.com",
    projectId: "task-table-139e9",
    storageBucket: "task-table-139e9.appspot.com",
    messagingSenderId: "1069149389258",
    appId: "1:1069149389258:web:a2deac60306de7dfad4f33"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;