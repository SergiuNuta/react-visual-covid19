import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyArND6wama5HaVb0ycQinQBhuL853JIR24",
    authDomain: "covid-19-3a49a.firebaseapp.com",
    databaseURL: "https://covid-19-3a49a.firebaseio.com",
    projectId: "covid-19-3a49a",
    storageBucket: "covid-19-3a49a.appspot.com",
    messagingSenderId: "637562347723",
    appId: "1:637562347723:web:430240ed3ae2f33a84fb4e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const providers = {
    google: new firebase.auth.GoogleAuthProvider()
}

export const firestore = firebase.firestore();


export default firebase;