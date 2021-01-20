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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log(snapShot);

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
