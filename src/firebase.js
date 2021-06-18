// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAqFW9F9r36N_AqIyBbRE3dODS0q_4iKf0",
    authDomain: "mytodo-ep.firebaseapp.com",
    projectId: "mytodo-ep",
    storageBucket: "mytodo-ep.appspot.com",
    messagingSenderId: "1046120930515",
    appId: "1:1046120930515:web:62d2ca779a853f0c438826",
    measurementId: "G-5728HHXBC5"
})

const db = firebaseApp.firestore()
// const auth = firebaseApp.auth()
// const storage = firebaseApp.storage()


export { db }
