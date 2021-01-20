import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCN0-f269DflAnQVwPpn-MG2BNpQL5mXUQ",
  authDomain: "crwn-clothing-db-53fea.firebaseapp.com",
  projectId: "crwn-clothing-db-53fea",
  storageBucket: "crwn-clothing-db-53fea.appspot.com",
  messagingSenderId: "402920118517",
  appId: "1:402920118517:web:89b7a2e863c640bd0ccdbc",
  measurementId: "G-CBMR7E2KNF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
