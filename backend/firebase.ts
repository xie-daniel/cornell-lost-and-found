import {
    initializeApp,
    applicationDefault,
    cert,
    ServiceAccount,
} from "firebase-admin/app";

import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth'; 
import withFirebaseAuth from 'react-with-firebase-auth';
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "./service_account.json";

const leServiceAcct: any = serviceAccount;

const app = initializeApp({
    credential: cert(leServiceAcct),
});

const auth = getAuth(leServiceAcct);
const db = getFirestore(app);

const providers = {
  googleProvider: new GoogleAuthProvider(),
};

type CreateComponentWithAuthType = ReturnType<typeof withFirebaseAuth>;

const createComponentWithAuth: CreateComponentWithAuthType = withFirebaseAuth({
  providers,
  firebaseAppAuth: auth,
});

const signInWithGoogle = () => {
  signInWithPopup(auth, providers.googleProvider);
};

const signOutFirebase = () => {
  signOut(auth);
};

export {
  db,
  auth,
  createComponentWithAuth,
  signInWithGoogle,
  signOutFirebase as signOut,
};
