import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBPOrrDh82jToSY-TcvWkLVCIVkWE17kMg",
    authDomain: "netflix-clone-48bca.firebaseapp.com",
    projectId: "netflix-clone-48bca",
    storageBucket: "netflix-clone-48bca.appspot.com",
    messagingSenderId: "846797430475",
    appId: "1:846797430475:web:913cd86e25fcb2840cc54e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;