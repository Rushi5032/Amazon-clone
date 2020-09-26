import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZ5vJtvh3hSMi_AtqY49ePVJxNbs1cUqM",
  authDomain: "clone-d48fa.firebaseapp.com",
  databaseURL: "https://clone-d48fa.firebaseio.com",
  projectId: "clone-d48fa",
  storageBucket: "clone-d48fa.appspot.com",
  messagingSenderId: "945840092588",
  appId: "1:945840092588:web:d3b2720a1e509417b4f609",
  measurementId: "G-H02J85B78C",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
