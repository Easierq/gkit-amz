import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCO3_uOsoK7zp3jsyG1W9g2Qbgs-M11v8I",
  authDomain: "gkit-cc359.firebaseapp.com",
  projectId: "gkit-cc359",
  storageBucket: "gkit-cc359.appspot.com",
  messagingSenderId: "104448625403",
  appId: "1:104448625403:web:62c1099b2fa92d17d4be5e",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
