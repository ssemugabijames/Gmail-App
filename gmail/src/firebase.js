
import firebase from "firebase";


   const firebaseConfig = {
  apiKey: "AIzaSyB8wHwCq1ameKg6XUijAIQKipgm1L1NmSo",
  authDomain: "fir-9962a.firebaseapp.com",
  projectId: "fir-9962a",
  storageBucket: "fir-9962a.appspot.com",
  messagingSenderId: "802916685729",
  appId: "1:802916685729:web:9a8b81af29fd71e6629de0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };