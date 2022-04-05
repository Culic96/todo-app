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
} from "firebase/auth";
// import { connectStorageEmulator, getStorage } from "firebase/storage";
import getConfig from "next/config";
const isEmulatorEnabled = true;

const { publicRuntimeConfig } = getConfig();
console.log("firebase config: ", publicRuntimeConfig.firebaseConfig);

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

export default firebaseApp;
export { auth, firestore, getCollection, loginUser, registerUser };
