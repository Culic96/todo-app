import { initializeApp } from "firebase/app";
import {
  collection,
  connectFirestoreEmulator,
  getFirestore,
} from "firebase/firestore";
import {
  connectAuthEmulator,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
// import { connectStorageEmulator, getStorage } from "firebase/storage";
import getConfig from "next/config";
const isEmulatorEnabled = true;

const { publicRuntimeConfig } = getConfig();

const firebaseApp = initializeApp(publicRuntimeConfig.firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
// const storage = getStorage(firebaseApp);

const getCollection = (collectionPath: string) =>
  collection(firestore, collectionPath);

// if (isEmulatorEnabled) {
//   connectAuthEmulator(auth, "http://localhost:9099");
//   connectFirestoreEmulator(firestore, "localhost", 8080);
//   // connectStorageEmulator(storage, "localhost", 9199);
// }

const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const registerUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const resetPassword = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

const subscribeToAuthChanges = (handleAuthChanges: any) => {
  auth.onAuthStateChanged((user) => {
    handleAuthChanges(user);
  });
};

export default firebaseApp;
export {
  auth,
  firestore,
  getCollection,
  loginUser,
  registerUser,
  resetPassword,
  subscribeToAuthChanges,
};
