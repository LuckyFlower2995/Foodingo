// import * as firebase from "./firebase";
// import { firebase } from "./firebase";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {AsyncStorage} from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// import * as firebase from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo-tqt5WWhZv_ckJXrJgU30WxjFw5ZjLY",
  authDomain: "fir-setup-55360.firebaseapp.com",
  projectId: "fir-setup-55360",
  storageBucket: "fir-setup-55360.appspot.com",
  messagingSenderId: "965439790089",
  appId: "1:965439790089:web:29514bd048e2eeb5722cd8"
};



// Initialize Firebase

export const FIREBASE_APP = initializeApp(FIREBASE_APP, firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);





// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeAuth(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// const auth = firebase.auth();

// export { auth };