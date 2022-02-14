// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByLqZrbVuYgipiEsY8L_K_m4h9s_MzrfU",
    authDomain: "political-chat-82e74.firebaseapp.com",
    projectId: "political-chat-82e74",
    storageBucket: "political-chat-82e74.appspot.com",
    messagingSenderId: "148316074677",
    appId: "1:148316074677:web:cfe3eff1b4bce6011744fc",
    measurementId: "G-FH0VRM2PHJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db =  firebaseApp.firestore();

  export default db;